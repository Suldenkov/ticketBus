from celery import shared_task
from .models import Flight
from datetime import datetime
from django.db.models import Q


@shared_task
def hello():
	now = datetime.now()
	now_day = now.strftime('%Y-%m-%d')
	now_time = datetime.now().strftime('%Y-%m-%d %H:%M')
	res = Flight.objects.filter(Q(scheduledDeparture__contains=now_day) & Q(scheduledDeparture__lte=now_time))
	for item in res:
		item.status = 300
		item.save()
