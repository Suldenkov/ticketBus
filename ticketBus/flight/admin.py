from django.contrib import admin
from .models import Bus, Place, Flight, ParkCar, Ticket

admin.site.register(Bus)
admin.site.register(Place)
admin.site.register(Flight)
admin.site.register(ParkCar)
admin.site.register(Ticket)
