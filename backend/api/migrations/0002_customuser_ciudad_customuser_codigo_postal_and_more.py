# Generated by Django 4.2.1 on 2023-06-07 13:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='ciudad',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='customuser',
            name='codigo_postal',
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AddField(
            model_name='customuser',
            name='direccion',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='customuser',
            name='dni',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name='customuser',
            name='num_telefono',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name='customuser',
            name='pais',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
