from django.db import models
from django.contrib.auth.models import User


class Passenger(models.Model):
	level = models.IntegerField(verbose_name='level')
	user = models.OneToOneField(User, on_delete=models.CASCADE)


class Administrator(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
