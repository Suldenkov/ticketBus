from json import loads
import json
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from accounts.serializers import CookieTokenRefreshSerializer, PassengerUserSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
import requests


class CookieTokenObtainPairView(TokenObtainPairView):
	def finalize_response(self, request, response, *args, **kwargs):
		if response.data.get('refresh'):
			cookie_max_age = 3600 * 24 * 14  # 14 days
			response.set_cookie('refresh_token', response.data['refresh'], max_age=cookie_max_age, httponly=True)
		return super().finalize_response(request, response, *args, **kwargs)


class CookieTokenRefreshView(TokenRefreshView):
	def finalize_response(self, request, response, *args, **kwargs):
		if response.data.get('refresh'):
			cookie_max_age = 3600 * 24 * 14  # 14 days
			response.set_cookie('refresh_token', response.data['refresh'], max_age=cookie_max_age, httponly=True)
		return super().finalize_response(request, response, *args, **kwargs)

	serializer_class = CookieTokenRefreshSerializer


class PassengerRegisterView(generics.CreateAPIView):
	serializer_class = PassengerUserSerializer


class Extractor(generics.RetrieveUpdateAPIView):
	permission_classes = (IsAuthenticated,)
	serializer_class = PassengerUserSerializer

	def get_object(self):
		return self.request.user


class Login(APIView):
	permission_classes = (AllowAny,)

	def post(self, request, *args, **kwargs):
		password = request.POST['password']
		username = request.POST['username']

		data = {"username": username, "password": password,
				"client_id": "SPO5Xek2NTde4S4XMCxCuxexvG1IjRdRJReT8ZPk",
				"client_secret": "d0kRPsJXESx9f09rB76XiK31rfToH95mPGR6s6ivGgCxMKOWTXOWqewa57JGDBAW2ydXijV1QKoAAbOHatb6ip3YxqfBcirqSya81j6qSuKqju9SfoX5QQLsfXCyIM2U",
				"grant_type": "password"}

		r = requests.post("http://localhost:8081/o/token/", data=data)
		return Response(r.json())
