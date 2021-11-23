from django.urls import path
from .views import FlightViewSet, ParkCarViewSet, PlaceViewSet

urlpatterns = [
	path('view/list/', FlightViewSet.as_view({'get': 'list'})),
	path('view/<pk>/', FlightViewSet.as_view({'get': 'retrieve'})),
	path('create/', FlightViewSet.as_view({'post': 'create'})),
	path('parkcar/view/list/', ParkCarViewSet.as_view({'get': 'list'})),
	path('seats/view/', PlaceViewSet.as_view({'get': 'list'})),
]
