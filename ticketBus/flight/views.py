from datetime import datetime

from .serializers import FlightListSerializer, \
	FlightDetailSerializer, FlightCreateSerializer, \
	ParkCarSerializer, TicketSerializer
from .models import Flight, ParkCar, Bus, Ticket
from rest_framework import viewsets
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from django.db.models import Q
from django.db import transaction, IntegrityError


class FlightViewSet(viewsets.ModelViewSet):
	permission_classes_by_action = {'create': [IsAdminUser, ],
									'list': [AllowAny, ],
									'retrive': [AllowAny, ]}

	def list(self, request):
		serializer = FlightListSerializer(self.get_queryset(), many=True)
		return Response(serializer.data)

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

	def retrieve(self, request, pk=None):
		queryset = Flight.objects.all()
		flight = get_object_or_404(queryset, pk=pk)
		obj = {'countPlace': flight.bus.countPlace}
		queryset = Ticket.objects.filter(flight=pk)
		mas = []
		for seats in queryset:
			mas.append(seats.seat_no)
		obj['busyPlaces'] = mas
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
	permission_classes_by_action = {'list': [AllowAny], 'create': [AllowAny]}

	def create(self, request, *args, **kwargs):
		req = request.data
		try:
			with transaction.atomic():
				for i in range(len(req['tickets'])):
					queryset = Ticket.objects.filter(seat_no=int(req['seats'][i]))
					if len(queryset) > 0:
						raise IntegrityError
					ticket = req['tickets'][i]
					birthday = datetime.strptime(ticket['birthday'], "%d.%m.%Y").strftime('%Y-%m-%d')
					Ticket.objects.create(
						firstName=ticket['firstName'],
						lastName=ticket['lastName'],
						patronymic=ticket['patronymic'],
						document=ticket['document'],
						birthday=birthday,
						gender=ticket['gender'],
						flight=Flight.objects.get(pk=int(req['flight'])),
						seat_no=int(req['seats'][i]))
		except IntegrityError:
			return Response({'code': 120})
		return Response({'code': 200})
