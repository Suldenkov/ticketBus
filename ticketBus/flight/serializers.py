from rest_framework import serializers
from .models import ParkCar, Flight, Bus, Ticket


class ParkCarSerializer(serializers.ModelSerializer):
	class Meta:
		model = ParkCar
		fields = '__all__'


class BusSerializer(serializers.ModelSerializer):
	class Meta:
		model = Bus
		fields = '__all__'


class FlightListSerializer(serializers.ModelSerializer):
	departureAutopark = ParkCarSerializer()
	arrivalAutopark = ParkCarSerializer()
	# scheduledDeparture = serializers.DateTimeField(format="%Y-%m-%d %H:%M")
	# scheduledArrival = serializers.DateTimeField(format="%Y-%m-%d %H:%M")
	duration = serializers.SerializerMethodField()
	amount = serializers.DecimalField(max_digits=10, decimal_places=0)

	class Meta:
		model = Flight
		fields = (
			'id', 'scheduledDeparture', 'scheduledArrival', 'status', 'departureAutopark', 'arrivalAutopark',
			'duration', 'amount')

	@staticmethod
	def get_duration(obj):
		hours, minutes = divmod(obj.duration.total_seconds(), 3600)
		minutes = int(divmod(minutes, 60)[0])
		return str(int(hours)) + 'ч ' + str(minutes) + 'м'


class FlightDetailSerializer(serializers.ModelSerializer):
	departureAutopark = ParkCarSerializer()
	arrivalAutopark = ParkCarSerializer()
	scheduledDeparture = serializers.DateTimeField(format="%d.%m.%Y %H:%M")
	scheduledArrival = serializers.DateTimeField(format="%d.%m.%Y %H:%M")
	amount = serializers.DecimalField(max_digits=10, decimal_places=0)
	bus = BusSerializer()

	class Meta:
		model = Flight
		fields = (
			'id', 'scheduledDeparture', 'scheduledArrival', 'status', 'departureAutopark', 'arrivalAutopark', 'bus',
			'amount')


class FlightCreateSerializer(serializers.ModelSerializer):
	class Meta:
		model = Flight
		fields = '__all__'


class TicketSerializer(serializers.ModelSerializer):
	birthday = serializers.DateField(format="%d.%m.%Y")

	class Meta:
		model = Ticket
		fields = ['id', 'document', 'gender', 'firstName', 'lastName', 'patronymic', 'seat_no', 'birthday']


class TicketMinSerializer(serializers.ModelSerializer):
	class Meta:
		model = Ticket
		fields = ['id', 'seat_no', 'is_checked']
