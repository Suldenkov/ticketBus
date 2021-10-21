from django.urls import path
from .views import FlightListView, FlightViewSet

urlpatterns = [
	path('view/list/', FlightViewSet.as_view({'get': 'list'})),
	path('view/<pk>/', FlightViewSet.as_view({'get': 'retrieve'})),
	path('create/', FlightViewSet.as_view({'post': 'create'})),
]