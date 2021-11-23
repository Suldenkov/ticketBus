from django.urls import path
from accounts.views import PassengerRegisterView, Extractor

urlpatterns = [
	path('passenger/create/', PassengerRegisterView.as_view()),
	path('passenger/me/', Extractor.as_view()),
]