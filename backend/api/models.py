from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    email = models.EmailField(max_length=150, unique=True)
    username = models.CharField(max_length=150, blank=True)  # Agregamos el campo username con blank=True
    direccion = models.CharField(max_length=255, blank=True)
    codigo_postal = models.CharField(max_length=10, blank=True)
    pais = models.CharField(max_length=255, blank=True)
    ciudad = models.CharField(max_length=255, blank=True)
    dni = models.CharField(max_length=20, blank=True)
    num_telefono = models.CharField(max_length=20, blank=True)

    def save(self, *args, **kwargs):
        if not self.username:  # Si el campo username no se proporciona, establece el valor predeterminado como el valor del campo email
            self.username = self.email
        super().save(*args, **kwargs)

    def __str__(self):
        return self.username


class Vuelo(models.Model):
    origen = models.CharField(max_length=100)
    destino = models.CharField(max_length=100)
    hora_salida = models.DateTimeField()
    hora_llegada = models.DateTimeField()
    duracion = models.PositiveIntegerField()
    numero_vuelo = models.CharField(max_length=100)
    tipo_avion = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=10, decimal_places=3, blank=True)
    imagen = models.CharField(max_length=100)
    asientos_disponibles = models.PositiveIntegerField( default=0)

    def __str__(self):
        return f"{self.numero_vuelo}: {self.origen} -> {self.destino}"

class Asiento(models.Model):
    numero_asiento = models.PositiveIntegerField()
    clase = models.CharField(max_length=100)
    disponible = models.BooleanField(default=True)
    vuelo = models.ForeignKey(Vuelo, on_delete=models.CASCADE)

    def __str__(self):
        return f"Asiento {self.numero_asiento} ({self.clase}) - Vuelo {self.vuelo.numero_vuelo}"

class Pago(models.Model):
    usuario = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    numero_tarjeta = models.CharField(max_length=16)
    fecha_expiracion = models.DateField()
    codigo_seguridad = models.CharField(max_length=4)

    def __str__(self):
        return f"{self.usuario.username} - {self.numero_tarjeta}"

class Compra(models.Model):
    usuario = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    vuelo = models.ForeignKey(Vuelo, on_delete=models.CASCADE)
    cantidad_asientos = models.PositiveIntegerField()
    precio_total = models.DecimalField(max_digits=10, decimal_places=3)
    fecha_compra = models.DateTimeField(auto_now_add=True)
    numero_tarjeta = models.CharField(max_length=16)

    def __str__(self):
        return f"{self.usuario.username} - {self.vuelo.numero_vuelo}"

class CarritoCompra(models.Model):
    usuario = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    vuelo = models.ForeignKey(Vuelo, on_delete=models.CASCADE)
    cantidad_asientos = models.PositiveIntegerField()

    class Meta:
        unique_together = [("usuario", "vuelo")]

    def __str__(self):
        return f"{self.usuario.username} - {self.vuelo.numero_vuelo}"


