# Generated by Django 4.2.1 on 2023-06-18 14:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_vuelo_asientos_disponibles'),
    ]

    operations = [
        migrations.AlterField(
            model_name='compra',
            name='cantidad_asientos',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.carritocompra'),
        ),
    ]
