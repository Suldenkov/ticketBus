# Generated by Django 3.2.8 on 2021-11-30 11:49

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('flight', '0002_auto_20211124_0017'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ticket',
            name='passenger',
        ),
        migrations.AddField(
            model_name='ticket',
            name='birthday',
            field=models.DateField(default=datetime.datetime(2021, 11, 30, 11, 49, 2, 867750, tzinfo=utc)),
        ),
        migrations.AddField(
            model_name='ticket',
            name='document',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='ticket',
            name='firstName',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='ticket',
            name='gender',
            field=models.CharField(choices=[('MALE', 'Male'), ('FEMALE', 'Female')], default='', max_length=20),
        ),
        migrations.AddField(
            model_name='ticket',
            name='lastName',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='ticket',
            name='patronymic',
            field=models.CharField(default='', max_length=100),
        ),
    ]
