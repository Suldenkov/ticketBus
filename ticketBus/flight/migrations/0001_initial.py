# Generated by Django 3.2.8 on 2021-10-14 17:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0002_administrator'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('busNumber', models.IntegerField()),
                ('model', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Flight',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('scheduledDeparture', models.DateTimeField()),
                ('scheduledArrival', models.DateTimeField()),
                ('status', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='ParkCar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('parkName', models.CharField(max_length=20)),
                ('city', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('flight', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='flight.flight')),
                ('passenger', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.passenger')),
            ],
        ),
        migrations.CreateModel(
            name='Place',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('place', models.IntegerField()),
                ('bus', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='flight.bus')),
            ],
        ),
        migrations.AddField(
            model_name='flight',
            name='arrivalAutopark',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='arrivalAutopark', to='flight.parkcar'),
        ),
        migrations.AddField(
            model_name='flight',
            name='bus',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='flight.bus'),
        ),
        migrations.AddField(
            model_name='flight',
            name='departureAutopark',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='departureAutopark', to='flight.parkcar'),
        ),
    ]
