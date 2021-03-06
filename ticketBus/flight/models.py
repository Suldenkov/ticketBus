from datetime import timedelta
from django.utils import timezone

from django.db import models
from accounts.models import Passenger, Inspector
from django.contrib.auth.models import User


class ParkCar(models.Model):
	parkName = models.CharField(max_length=50)
	city = models.CharField(max_length=50)
	address = models.CharField(max_length=50, default='')


class Bus(models.Model):
	busNumber = models.CharField(max_length=8)
	model = models.CharField(max_length=10)
	countPlace = models.IntegerField()


class Place(models.Model):
	bus = models.ForeignKey(Bus, on_delete=models.CASCADE)
	place = models.IntegerField()


class Flight(models.Model):
	scheduledDeparture = models.DateTimeField()
	scheduledArrival = models.DateTimeField()
	status = models.IntegerField()
	departureAutopark = models.ForeignKey(ParkCar, on_delete=models.CASCADE, related_name='departureAutopark')
	arrivalAutopark = models.ForeignKey(ParkCar, on_delete=models.CASCADE, related_name='arrivalAutopark')
	bus = models.ForeignKey(Bus, on_delete=models.CASCADE)
	duration = models.DurationField(default=timedelta())
	amount = models.DecimalField(max_digits=10, decimal_places=2)
	inspector = models.ForeignKey(Inspector, on_delete=models.CASCADE, blank=True, null=True)


class Ticket(models.Model):
	GENDER = (
		('М', 'М'),
		('Ж', 'Ж'),
	)
	flight = models.ForeignKey(Flight, on_delete=models.CASCADE)
	firstName = models.CharField(max_length=100, default='')
	lastName = models.CharField(max_length=100, default='')
	patronymic = models.CharField(max_length=100, default='')
	document = models.CharField(max_length=20, default='')
	birthday = models.DateField(default=timezone.now())
	gender = models.CharField(max_length=20, choices=GENDER, default='')
	seat_no = models.IntegerField()
	is_checked = models.BooleanField(default=False)
	qr_code = models.ImageField(upload_to='./qr_code', blank=True)

