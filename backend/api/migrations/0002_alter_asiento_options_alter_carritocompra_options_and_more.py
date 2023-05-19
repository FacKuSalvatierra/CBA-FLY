# Generated by Django 4.2.1 on 2023-05-19 07:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='asiento',
            options={'verbose_name': 'Asiento', 'verbose_name_plural': 'Asientos'},
        ),
        migrations.AlterModelOptions(
            name='carritocompra',
            options={'verbose_name': 'Carrito de compra', 'verbose_name_plural': 'CarritoCompras'},
        ),
        migrations.AlterModelOptions(
            name='compra',
            options={'verbose_name': 'Compra', 'verbose_name_plural': 'Compras'},
        ),
        migrations.AlterModelOptions(
            name='pago',
            options={'verbose_name': 'Pago', 'verbose_name_plural': 'Pagos'},
        ),
        migrations.AlterModelOptions(
            name='usuario',
            options={'verbose_name': 'Usuario', 'verbose_name_plural': 'Usuarios'},
        ),
        migrations.AlterModelOptions(
            name='vuelo',
            options={'verbose_name': 'Vuelo', 'verbose_name_plural': 'Vuelos'},
        ),
        migrations.AlterModelTable(
            name='asiento',
            table='asiento',
        ),
        migrations.AlterModelTable(
            name='carritocompra',
            table='carritocompra',
        ),
        migrations.AlterModelTable(
            name='compra',
            table='compra',
        ),
        migrations.AlterModelTable(
            name='pago',
            table='pago',
        ),
        migrations.AlterModelTable(
            name='usuario',
            table='usuario',
        ),
        migrations.AlterModelTable(
            name='vuelo',
            table='vuelo',
        ),
    ]
