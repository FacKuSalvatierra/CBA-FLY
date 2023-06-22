# Generated by Django 4.2.1 on 2023-06-21 23:48

from django.conf import settings
import django.contrib.auth.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('email', models.EmailField(max_length=150, unique=True)),
                ('username', models.CharField(blank=True, max_length=150)),
                ('direccion', models.CharField(blank=True, max_length=255)),
                ('codigo_postal', models.CharField(blank=True, max_length=10)),
                ('pais', models.CharField(blank=True, max_length=255)),
                ('ciudad', models.CharField(blank=True, max_length=255)),
                ('dni', models.CharField(blank=True, max_length=20)),
                ('num_telefono', models.CharField(blank=True, max_length=20)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Vuelo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('origen', models.CharField(max_length=100)),
                ('destino', models.CharField(max_length=100)),
                ('hora_salida', models.DateTimeField()),
                ('hora_llegada', models.DateTimeField()),
                ('duracion', models.PositiveIntegerField()),
                ('numero_vuelo', models.CharField(max_length=100)),
                ('tipo_avion', models.CharField(max_length=100)),
                ('precio', models.DecimalField(blank=True, decimal_places=3, max_digits=10)),
                ('imagen', models.CharField(max_length=100)),
                ('asientos_disponibles', models.PositiveIntegerField()),
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
                ('cantidad_asientos', models.PositiveIntegerField()),
                ('precio_total', models.DecimalField(decimal_places=3, max_digits=10)),
                ('fecha_compra', models.DateTimeField(auto_now_add=True)),
                ('numero_tarjeta', models.CharField(max_length=16)),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('vuelo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.vuelo')),
            ],
        ),
        migrations.CreateModel(
            name='Asiento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numero_asiento', models.PositiveIntegerField()),
                ('clase', models.CharField(max_length=100)),
                ('disponible', models.BooleanField(default=True)),
                ('vuelo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.vuelo')),
            ],
        ),
        migrations.CreateModel(
            name='CarritoCompra',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad_asientos', models.PositiveIntegerField()),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('vuelo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.vuelo')),
            ],
            options={
                'unique_together': {('usuario', 'vuelo')},
            },
        ),
    ]
