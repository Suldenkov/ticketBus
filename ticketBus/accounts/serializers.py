from rest_framework_simplejwt.serializers import TokenRefreshSerializer
from rest_framework_simplejwt.exceptions import InvalidToken
from rest_framework import serializers
from .models import Passenger, CustomUser, Inspector
from djoser.serializers import UserSerializer, UserCreateSerializer as BaseUserRegistrationSerializer


class CookieTokenRefreshSerializer(TokenRefreshSerializer):
	refresh = None

	def validate(self, attrs):
		attrs['refresh'] = self.context['request'].COOKIES.get('refresh_token')
		if attrs['refresh']:
			return super().validate(attrs)
		else:
			raise InvalidToken('No valid token found in cookie \'refresh_token\'')


class UserRegistrationSerializer(BaseUserRegistrationSerializer):
	class Meta(BaseUserRegistrationSerializer.Meta):
		fields = ('first_name', 'password', 'last_name', 'email', 'patronymic', 'document', 'phone')
		extra_kwargs = {
			'document': {'required': False},
			'phone': {'required': False},
			'patronymic': {'required': False},
		}


class UserProfileSerializer(UserSerializer):
	class Meta(UserSerializer.Meta):
		fields = ('first_name', 'last_name', 'email', 'patronymic', 'document', 'phone')
		# extra_kwargs = {
		# 	'first_name': {'required': False},
		# 	'last_name': {'required': False},
		# 	'patronymic': {'required': False},
		# 	'document': {'required': False},
		# 	'phone': {'required': False},
		# 	'patronymic': {'required': False},
		# }


class UserSer(serializers.ModelSerializer):
	class Meta:
		model = CustomUser
		fields = ('first_name', 'password', 'last_name', 'email', 'patronymic', 'document', 'phone')
		extra_kwargs = {
			'password': {'write_only': True},
			'first_name': {'read_only': True},
			'last_name': {'read_only': True},
			'patronymic': {'read_only': True},
			'document': {'read_only': True},
		}


class PassengerUserSerializer(serializers.ModelSerializer):
	# passenger = PassengerSerializer()

	class Meta:
		model = CustomUser
		fields = ('password', 'last_name', 'email')
		extra_kwargs = {
			'password': {'write_only': True}
		}


# def create(self, validated_data):
# 	password = validated_data.pop('password')
# 	passenger_data = validated_data.pop('passenger')
# 	instance = self.Meta.model(**validated_data)
# 	if password is not None:
# 		instance.set_password(password)
# 	instance.save()
# 	Passenger.objects.create(user=instance, **passenger_data)
# 	return instance


class InspectorSerializer(serializers.ModelSerializer):
	class Meta:
		model = Inspector
		fields = ('first_name', 'password', 'last_name', 'email')
		extra_kwargs = {
			'password': {'write_only': True}
		}

	def create(self, validated_data):
		password = validated_data.pop('password')
		user = CustomUser.objects.create(**validated_data, type='Inspector')
		if password is not None:
			user.set_password(password)
		user.save()
		return user
