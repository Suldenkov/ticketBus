from django.urls import path
from .views import FlightViewSet, ParkCarViewSet, TicketViewSet, MobileFlightViewSet, TicketSeatView

urlpatterns = [
	path('view/list/', FlightViewSet.as_view({'get': 'list'})),
	path('view/<pk>/', FlightViewSet.as_view({'get': 'retrieve'})),
	path('create/', FlightViewSet.as_view({'post': 'create'})),
	path('parkcar/view/list/', ParkCarViewSet.as_view({'get': 'list'})),
	path('ticket/create/', TicketViewSet.as_view({'post': 'create'})),
	path('ticket/<pk>/', TicketViewSet.as_view({'get': 'retrieve'})),
	path('ticket/update/<pk>/', TicketSeatView.as_view()),
	path('mobile/flights/', MobileFlightViewSet.as_view({'get': 'list'})),
	# path('send/', Mail.as_view({'get': 'retrieve'}))
]
