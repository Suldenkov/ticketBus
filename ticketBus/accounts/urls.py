from django.urls import path
from accounts.views import *

urlpatterns = [
	path('passenger/create/', PassengerRegisterView.as_view()),
	path('passenger/me/', Extractor.as_view()),
	path('auth/token/', CookieTokenObtainPairView.as_view(), name='token_obtain_pair'),
	path('auth/token/refresh/', CookieTokenRefreshView.as_view(), name='token_refresh'),
]