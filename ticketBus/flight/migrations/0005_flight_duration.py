# Generated by Django 3.2.8 on 2021-10-31 00:09

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flight', '0004_alter_flight_bus'),
    ]

    operations = [
        migrations.AddField(
            model_name='flight',
            name='duration',
            field=models.DurationField(default=datetime.timedelta(0)),
        ),
    ]
