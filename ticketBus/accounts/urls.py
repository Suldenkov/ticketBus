from django.urls import path
from accounts.views import PassengerRegisterView, Extractor, InspectorRegister, UserView

urlpatterns = [
	path('passenger/create/', PassengerRegisterView.as_view()),
	path('passenger/me/', Extractor.as_view()),
	path('me/', UserView.as_view()),
	path('inspector/create/', InspectorRegister.as_view())
]