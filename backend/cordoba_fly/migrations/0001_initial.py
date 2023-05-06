# Generated by Django 4.2.1 on 2023-05-04 22:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Vuelo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('origen', models.CharField(max_length=100)),
                ('destino', models.CharField(max_length=100)),
                ('hora_salida', models.DateTimeField()),
                ('hora_llegada', models.DateTimeField()),
                ('duracion', models.IntegerField()),
                ('numero_vuelo', models.CharField(max_length=100)),
                ('tipo_avion', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Pago',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numero_tarjeta', models.CharField(max_length=16)),
                ('fecha_expiracion', models.DateField()),
                ('codigo_seguridad', models.CharField(max_length=4)),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Compra',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad_asientos', models.IntegerField()),
                ('precio_total', models.DecimalField(decimal_places=2, max_digits=10)),
                ('fecha_compra', models.DateTimeField(auto_now_add=True)),
                ('numero_tarjeta', models.CharField(max_length=16)),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('vuelo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cordoba_fly.vuelo')),
            ],
        ),
        migrations.CreateModel(
            name='Asiento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numero_asiento', models.IntegerField()),
                ('clase', models.CharField(max_length=100)),
                ('precio', models.DecimalField(decimal_places=2, max_digits=10)),
                ('disponible', models.BooleanField(default=True)),
                ('vuelo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cordoba_fly.vuelo')),
            ],
        ),
        migrations.CreateModel(
            name='CarritoCompra',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad_asientos', models.IntegerField()),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('vuelo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cordoba_fly.vuelo')),
            ],
            options={
                'unique_together': {('usuario', 'vuelo')},
            },
        ),
    ]
