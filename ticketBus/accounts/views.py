from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from accounts.serializers import CookieTokenRefreshSerializer, UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated


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
	serializer_class = UserSerializer


class Extractor(generics.RetrieveUpdateAPIView):
	permission_classes = (IsAuthenticated,)
	serializer_class = UserSerializer

	# def get(self, request):
	# 	content = {
	# 		'username': request.user.username
	# 	}
	# 	return Response(content)
	def get_object(self):
		return self.request.user