# Generated by Django 4.2.1 on 2023-06-09 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_compra_precio_total'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vuelo',
            name='precio',
            field=models.DecimalField(blank=True, decimal_places=3, max_digits=10),
        ),
    ]
