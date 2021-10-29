from rest_framework import serializers
from django.contrib.auth.models import User
from .models import ParkCar, Flight, Bus


class ParkCarSerializer(serializers.ModelSerializer):
	class Meta:
		model = ParkCar
		fields = '__all__'


class FlightListSerializer(serializers.ModelSerializer):
	departureAutopark = ParkCarSerializer()
	arrivalAutopark = ParkCarSerializer()

	##test##
	scheduledDeparture = serializers.DateTimeField(format="%Y-%m-%d %H:%M")
	scheduledArrival = serializers.DateTimeField(format="%Y-%m-%d %H:%M")
	#######

	class Meta:
		model = Flight
		fields = ('id', 'scheduledDeparture', 'scheduledArrival', 'status', 'departureAutopark', 'arrivalAutopark')


class BusSerializer(serializers.ModelSerializer):
	class Meta:
		model = Bus
		fields = '__all__'


class FlightDetailSerializer(serializers.ModelSerializer):
	departureAutopark = ParkCarSerializer()
	arrivalAutopark = ParkCarSerializer()


	##test##
	scheduledDeparture = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
	sheduledArrival = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
	#######
	bus = BusSerializer()

	class Meta:
		model = Flight
		fields = (
		'id', 'scheduledDeparture', 'scheduledArrival', 'status', 'departureAutopark', 'arrivalAutopark', 'bus')


class FlightCreateSerializer(serializers.ModelSerializer):
	class Meta:
		model = Flight
		fields = '__all__'

