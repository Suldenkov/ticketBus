from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _, gettext_lazy as l


class CustomUserManager(BaseUserManager):
	def create_superuser(self, email, password, **other_fields):

		other_fields.setdefault('is_staff', True)
		other_fields.setdefault('is_superuser', True)
		other_fields.setdefault('is_active', True)

		if other_fields.get('is_staff') is not True:
			raise ValueError(
				'Superuser must be assigned to is_staff=True.')
		if other_fields.get('is_superuser') is not True:
			raise ValueError(
				'Superuser must be assigned to is_superuser=True.')

		return self.create_user(email, password, **other_fields)

	def create_user(self, email, password, **other_fields):

		if not email:
			raise ValueError(_('You must provide an email address'))

		email = self.normalize_email(email)
		user = self.model(email=email, **other_fields)
		user.set_password(password)
		user.save()
		return user


class CustomUser(AbstractUser):
	class Types(models.TextChoices):
		PASSENGER = 'Passenger', 'PASSENGER'
		ADMINISTRATOR = 'Administrator', 'ADMINISTRATOR'
		INSPECTOR = 'Inspector', 'INSPECTOR'

	default_type = Types.PASSENGER
	type = models.CharField(l('Type'), max_length=50, choices=Types.choices, default=default_type)
	username = None
	email = models.EmailField(_('email address'), unique=True)
	patronymic = models.CharField(l('patronymic'), max_length=150, blank=True)
	document = models.CharField(l('document'), max_length=150, blank=True)
	phone = models.CharField(l('phone'), max_length=150, blank=True)
	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = []

	objects = CustomUserManager()



class PassengerManager(models.Manager):

	def get_queryset(self, *args, **kwargs):
		return super().get_queryset(*args, **kwargs).filter(type=CustomUser.Types.PASSENGER)


class Passenger(CustomUser):
	objects = PassengerManager()

	class Meta:
		proxy = True


class AdministratorManager(models.Manager):
	def get_queryset(self, *args, **kwargs):
		return super().get_queryset(*args, **kwargs).filter(type=CustomUser.Types.ADMINISTRATOR)



class Administrator(CustomUser):
	objects = AdministratorManager()

	class Meta:
		proxy = True


class InspectorManager(models.Manager):
	def get_queryset(self, *args, **kwargs):
		return super().get_queryset(*args, **kwargs).filter(type=CustomUser.Types.INSPECTOR)


class Inspector(CustomUser):
	objects = InspectorManager()

	class Meta:
		proxy = True
