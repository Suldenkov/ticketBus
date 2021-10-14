from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *


class ParkCarSerializer(serializers.ModelSerializer):
	class Meta:
		model = ParkCar
		fields = ('city',)


class FlightSerializer(serializers.ModelSerializer):
	departureAutopark = ParkCarSerializer()
	arrivalAutopark = ParkCarSerializer()

	class Meta:
		model = Flight
		fields = ('scheduledDeparture', 'scheduledArrival', 'status', 'departureAutopark', 'arrivalAutopark')
