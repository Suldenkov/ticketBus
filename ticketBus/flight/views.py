import datetime
from .serializers import FlightListSerializer, FlightDetailSerializer, FlightCreateSerializer, ParkCarSerializer
from .models import Flight, ParkCar, Bus
from rest_framework import viewsets
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.db.models import Q


class FlightViewSet(viewsets.ModelViewSet):
	permission_classes_by_action = {'create': [AllowAny],
									'list': [AllowAny],
									'retrive': [AllowAny]}
	serializer_class = FlightCreateSerializer

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
		serializer = FlightDetailSerializer(flight)
		return Response(serializer.data)

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
	permission_classes_by_action = {'list': [AllowAny],}

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
