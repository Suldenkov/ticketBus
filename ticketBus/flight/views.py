import datetime

from .serializers import FlightListSerializer, FlightDetailSerializer, FlightCreateSerializer
from .models import Flight
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny, IsAuthenticated


class FlightListView(generics.ListAPIView):
	serializer_class = FlightListSerializer

	def get_queryset(self):

		queryset = Flight.objects.all()
		departureAutopark = self.request.query_params.get('departureAutopark__city')
		arrivalAutopark = self.request.query_params.get('arrivalAutopark__city')
		day = self.request.query_params.get('scheduledDeparture')

		if departureAutopark is not None:
			queryset = queryset.filter(departureAutopark__city=departureAutopark)
		if arrivalAutopark is not None:
			queryset = queryset.filter(arrivalAutopark__city=arrivalAutopark)
		if day is not None:
			queryset = queryset.filter(scheduledDeparture=day)
		return queryset


class FlightViewSet(viewsets.ModelViewSet):
	permission_classes_by_action = {'create': [IsAuthenticated],
									'list': [AllowAny],
									'retrive': [AllowAny]}
	serializer_class = FlightCreateSerializer

	def list(self, request):
		serializer = FlightListSerializer(self.get_queryset(), many=True)
		return Response(serializer.data)

	def get_queryset(self):

		queryset = Flight.objects.all()
		departureAutopark = self.request.query_params.get('departureAutopark__city')
		arrivalAutopark = self.request.query_params.get('arrivalAutopark__city')
		day = self.request.query_params.get('scheduledDeparture')

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

	# def create(self, request):
	# 	queryset = Flight.objects.all()
	# 	serializer = FlightCreateSerializer(queryset)
	# 	return Response(serializer.data)
