from datetime import datetime
from functools import lru_cache

from django.http import HttpResponseNotFound
from .serializers import FlightListSerializer, \
	FlightDetailSerializer, FlightCreateSerializer, \
	ParkCarSerializer, TicketSerializer, TicketMinSerializer
from .models import Flight, ParkCar, Bus, Ticket
from rest_framework import viewsets, generics
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from django.db.models import Q
from django.db import transaction, IntegrityError

import qrcode
from io import BytesIO
from django.core.files import File
from PIL import Image, ImageDraw


class FlightViewSet(viewsets.ModelViewSet):
	permission_classes_by_action = {'create': [IsAdminUser, ],
									'list': [AllowAny, ],
									'retrive': [AllowAny, ]}

	def list(self, request):
		serializer = FlightListSerializer(self.get_queryset(), many=True)
		return Response(serializer.data)

	def retrieve(self, request, pk=None):
		queryset = Flight.objects.all()
		flight = get_object_or_404(queryset, pk=pk)
		obj = {'countPlace': flight.bus.countPlace}
		queryset = Ticket.objects.filter(flight=pk)
		res = TicketMinSerializer(queryset, many=True)
		obj['busyPlaces'] = res.data
		serializer = FlightDetailSerializer(flight)
		obj.update(serializer.data)
		return Response(obj)

	def create(self, request):
		departureAutopark = ParkCar.objects.get(pk=request.data['departureAutopark'])
		arrivalAutopark = ParkCar.objects.get(pk=request.data['arrivalAutopark'])
		bus = Bus.objects.get(pk=request.data['bus'])
		queryset = Flight.objects.filter(
			Q(bus=bus) & Q(scheduledDeparture__lte=request.data['scheduledDeparture']) & Q(
				scheduledArrival__gte=request.data['scheduledDeparture']))
		if len(queryset) == 0:
			queryset = Flight.objects.create(
				scheduledDeparture=request.data['scheduledDeparture'],
				scheduledArrival=request.data['scheduledArrival'],
				status=request.data['status'],
				departureAutopark=departureAutopark,
				arrivalAutopark=arrivalAutopark,
				bus=bus,
			)
			serializer = FlightCreateSerializer(queryset)
			return Response(serializer.data)
		return Response({'status': 400, 'text': 'incorrect parameter'})

	def get_queryset(self):
		queryset = Flight.objects.all()
		departureAutopark = self.request.query_params.get('departure')
		arrivalAutopark = self.request.query_params.get('arrival')
		day = self.request.query_params.get('date')
		if departureAutopark is not None:
			queryset = queryset.filter(departureAutopark__city=departureAutopark)
		if arrivalAutopark is not None:
			queryset = queryset.filter(arrivalAutopark__city=arrivalAutopark)
		if day is not None:
			queryset = queryset.filter(scheduledDeparture__contains=day)
		return queryset


class ParkCarViewSet(viewsets.ModelViewSet):
	permission_classes_by_action = {'list': [AllowAny], }

	def list(self, request):
		queryset = self.get_queryset()
		serializer = ParkCarSerializer(queryset, many=True)
		return Response(serializer.data)

	def get_queryset(self):
		queryset = ParkCar.objects.all()
		city = self.request.query_params.get('city')
		if city is not None:
			queryset = queryset.filter(city__istartswith=city)
		return queryset[:5]


class TicketViewSet(viewsets.ModelViewSet):
	permission_classes_by_action = {'list': [AllowAny], 'create': [AllowAny], 'retrieve': [AllowAny]}

	def retrieve(self, request, pk=None):
		queryset = Ticket.objects.all()
		ticket = get_object_or_404(queryset, pk=pk)
		query = request.query_params.get('flight')
		if query is None:
			return HttpResponseNotFound('Page not found')
		if str(ticket.flight.id) != query:
			return Response({'status': 'Этот биллет не подходит'})
		serializer = TicketSerializer(ticket)
		return Response(serializer.data)

	def create(self, request, *args, **kwargs):
		req = request.data
		tickets = []
		try:
			with transaction.atomic():
				for i in range(len(req['tickets'])):
					queryset = Ticket.objects.filter(seat_no=int(req['seats'][i]))
					if len(queryset) > 0:
						raise IntegrityError
					ticket = req['tickets'][i]
					flight = int(req['flight'])
					birthday = datetime.strptime(ticket['birthday'], "%d.%m.%Y").strftime('%Y-%m-%d')
					ticket = Ticket.objects.create(
						firstName=ticket['firstName'],
						lastName=ticket['lastName'],
						patronymic=ticket['patronymic'],
						document=ticket['document'],
						birthday=birthday,
						gender=ticket['gender'],
						flight=Flight.objects.get(pk=flight),
						seat_no=int(req['seats'][i]))
					tickets.append(ticket)
		except IntegrityError:
			return Response({'code': 120})
		for ticket in tickets:
			qrcode_img = qrcode.make(f'/{ticket.id}?flight={flight}')
			canvas = Image.new('RGB', (290, 290), 'white')
			ImageDraw.Draw(canvas)
			canvas.paste(qrcode_img)
			fname = f'qr_code-{ticket.id}.png'
			buffer = BytesIO()
			canvas.save(buffer, 'PNG')
			ticket.qr_code.save(fname, File(buffer), save=False)
			canvas.close()
			ticket.save()
		send_mail(tickets)
		return Response({'code': 200})


class TicketSeatView(generics.RetrieveUpdateAPIView):
	serializer_class = TicketMinSerializer
	queryset = Ticket


class MobileFlightViewSet(viewsets.ModelViewSet):
	permission_classes_by_action = {'list': [AllowAny, ],
									'retrive': [AllowAny, ]}

	def list(self, request, *args, **kwargs):
		queryset = Flight.objects.filter(inspector=request.user.pk).order_by('scheduledDeparture')
		serializer = FlightListSerializer(queryset, many=True)
		return Response(serializer.data)


from email.mime.image import MIMEImage


@lru_cache()
def logo_data(path, name):
	with open(f'{path}', 'rb') as f:
		logo_data = f.read()
	logo = MIMEImage(logo_data)
	logo.add_header('Content-ID', f'<{name}>')
	return logo


from django.core.mail import EmailMultiAlternatives
from datetime import timezone


def utc_to_local(utc_dt):
	return utc_dt.replace(tzinfo=timezone.utc).astimezone(tz=None)


def send_mail(tickets):
	subject, from_email, to = 'Входные билеты на автобус. Не забудте распечатать его или иметь возможность показать с мобильного устройства при посадке.', 'fastticketbus@gmail.com', 'suldenkovv@mail.ru'
	msg = EmailMultiAlternatives(subject, None, from_email, [to])
	msg.attach(logo_data('logo.png', 'logo'))
	html_content = '''<!DOCTYPE html>
<html>
<body style="padding: 0; margin: 0; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
<div class="message" style="background-color: #f5f5f5; padding: 50px; box-sizing: border-box; width: 150ch">'''

	for ticket in tickets:
		msg.attach(logo_data(ticket.qr_code, f'qr_code_{ticket.id}'))
		html_content += f'''
		<div class="ticket" style="box-shadow: rgba(0, 0, 0 , 0.15) 0px 2px 4px; border-radius: 30px; 
			padding: 15px 20px; width: 100ch; margin: 0 auto 5em auto; background-color: white;">
		<div class="ticket_title" style="display: flex; align-items: center; justify-content: space-between">
			<div class="ticket_title_logo">
				<img src="cid:logo" style="width: 130px; height: 60px;">
			</div>
			<div class="ticket_title_content" style="margin: 0 7em 1em 0;">
				<h1 style="margin: 0;">Электронный биллет</h1>
			</div>
		</div>
		<div class="ticket_content" style="padding: 10px 20px; font-size: 1.1em; display: flex; 
			justify-content: space-between; align-items: center;">
			<div class="ticket_content_block">
				<div class="field" style="margin-bottom: 0.5em; font-weight: 900;">
					<span class=field_title>Имя</span>
				</div>
				<div class="field" style="margin-bottom: 0.5em; font-weight: 900;">
					<span class=field_title>Фамилия</span>
				</div>
				<div class="field" style="margin-bottom: 0.5em; font-weight: 900;">
					<span class=field_title>Отчество</span>
				</div>
				<div class="field" style="margin-bottom: 0.5em; font-weight: 900;">
					<span class=field_title>Дата отправления</span>
				</div>
				<div class="field" style="margin-bottom: 0.5em; font-weight: 900;">
					<span class=field_title>Станция отправления</span>
				</div>
				<div class="field" style="margin-bottom: 0.5em; font-weight: 900;">
					<span class=field_title>Станция назначения</span>
				</div>
				<div class="field" style="margin-bottom: 0.5em; font-weight: 900;">
					<span class=field_title>Стоимость</span>
				</div>
				<div class="field" style="margin-bottom: 0.5em; font-weight: 900;">
					<span class=field_title>№ автобуса</span>
				</div>
				<div class="field" style="margin-bottom: 0.5em; font-weight: 900;">
					<span class=field_title>Место</span>
				</div>
			</div>
			<div class="ticket_content_block">
				<div class="field" style="margin-bottom: 0.5em;">
					<span class=field_title>{ticket.firstName}</span>
				</div>
				<div class="field" style="margin-bottom: 0.5em;">
					<span class=field_title>{ticket.lastName}</span>
				</div>
				<div class="field" style="margin-bottom: 0.5em;">
					<span class=field_title>{ticket.patronymic}</span>
				</div>
				<div class="field" style="margin-bottom: 0.5em;">
					<span class=field_title>
					{utc_to_local(ticket.flight.scheduledDeparture).strftime("%d.%m.%Y %H:%M")}</span>
				</div>
				<div class="field" style="margin-bottom: 0.5em;">
					<span class=field_title>{ticket.flight.departureAutopark.parkName}</span>
				</div>
				<div class="field" style="margin-bottom: 0.5em;">
					<span class=field_title>{ticket.flight.arrivalAutopark.parkName}</span>
				</div>
				<div class="field" style="margin-bottom: 0.5em;">
					<span class=field_title>{ticket.flight.amount}</span>
				</div>
				<div class="field" style="margin-bottom: 0.5em;">
					<span class=field_title>{ticket.flight.bus.busNumber}</span>
				</div>
				<div class="field" style="margin-bottom: 0.5em;">
					<span class=field_title>{ticket.seat_no}</span>
				</div>
			</div>
			<div class="qr_code">
				<img style="width: 10em; height: 10em;" src="cid:qr_code_{ticket.id}">
			</div>
		</div>
		<div class="ticket_footer">
			<span>8 939 395-86-10</span>
			<span>Контактная иформация</span>
		</div>
	</div>
'''

	html_content += '''</div>
</body>
</html>'''
	msg.attach_alternative(html_content, "text/html")

	msg.send()
