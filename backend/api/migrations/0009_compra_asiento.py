# Generated by Django 4.2.1 on 2023-06-18 14:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_compra_cantidad_asientos'),
    ]

    operations = [
        migrations.AddField(
            model_name='compra',
            name='Asiento',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='api.asiento'),
            preserve_default=False,
        ),
    ]
