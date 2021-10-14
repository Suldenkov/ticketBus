from django.db import models
from accounts.models import Passenger
from django.contrib.auth.models import User


class ParkCar(models.Model):
	parkName = models.CharField(max_length=20)
	city = models.CharField(max_length=10)


class Bus(models.Model):
	busNumber = models.IntegerField()
	model = models.CharField(max_length=10)


class Place(models.Model):
	bus = models.ForeignKey(Bus, on_delete=models.CASCADE)
	place = models.IntegerField()


class Flight(models.Model):
	scheduledDeparture = models.DateTimeField()
	scheduledArrival = models.DateTimeField()
	status = models.IntegerField()
	departureAutopark = models.ForeignKey(ParkCar, on_delete=models.CASCADE, related_name='departureAutopark')
	arrivalAutopark = models.ForeignKey(ParkCar, on_delete=models.CASCADE, related_name='arrivalAutopark')
	bus = models.OneToOneField(Bus, on_delete=models.CASCADE)


class Ticket(models.Model):
	passenger = models.ForeignKey(Passenger, on_delete=models.CASCADE)
	flight = models.ForeignKey(Flight, on_delete=models.CASCADE)
