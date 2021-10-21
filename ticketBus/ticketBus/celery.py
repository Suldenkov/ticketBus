import os

from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ticketBus.settings')

app = Celery('ticketBus')

app.config_from_object('django.conf:settings', namespace='CELERY')

app.autodiscover_tasks()

app.conf.beat_schedule = {
	'show': {
		'task': 'flight.tasks.hello',
		'schedule': 300.0
	}
}

