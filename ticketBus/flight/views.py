from .serializers import *
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated


class FlightView(generics.ListAPIView):
	# queryset = Flight.objects.all()
	serializer_class = FlightSerializer

	def get_queryset(self):
		print('-----------------------')
		# self.kwargs['scheduledDeparture']=scheduledDeparture__gte
		# print(Flight.objects.filter(scheduledDeparture__gte=self.kwargs['scheduledDeparture']))
		# print(self.kwargs)
		# print()
		print('-----------------------')
		# scheduledDeparture >= self.request.GET.get('scheduledDeparture')

		# return Flight.objects.filter(departureAutopark__city=self.request.GET.get('departureAutopark__city'))
		return  Flight.objects.all()