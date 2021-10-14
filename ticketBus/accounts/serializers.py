from rest_framework_simplejwt.serializers import TokenRefreshSerializer
from rest_framework_simplejwt.exceptions import InvalidToken
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Passenger


class CookieTokenRefreshSerializer(TokenRefreshSerializer):
	refresh = None

	def validate(self, attrs):
		attrs['refresh'] = self.context['request'].COOKIES.get('refresh_token')
		if attrs['refresh']:
			return super().validate(attrs)
		else:
			raise InvalidToken('No valid token found in cookie \'refresh_token\'')


class PassengerSerializer(serializers.ModelSerializer):
	class Meta:
		model = Passenger
		fields = ('level',)


class PassengerUserSerializer(serializers.ModelSerializer):
	passenger = PassengerSerializer()

	class Meta:
		model = User
		fields = ('username', 'password', 'last_name', 'passenger', 'email')
		extra_kwargs = {
			'password': {'write_only': True}
		}

	def create(self, validated_data):
		password = validated_data.pop('password')
		passenger_data = validated_data.pop('passenger')
		instance = self.Meta.model(**validated_data)
		if password is not None:
			instance.set_password(password)
		instance.save()
		Passenger.objects.create(user=instance, **passenger_data)
		return instance
