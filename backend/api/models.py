from django.db import models
from django.db.models import Sum
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'password']
    email = models.EmailField(max_length=150, unique=True)
    direccion = models.CharField(max_length=255, blank=True)
    codigo_postal = models.CharField(max_length=10, blank=True)
    pais = models.CharField(max_length=255, blank=True)
    ciudad = models.CharField(max_length=255, blank=True)
    dni = models.CharField(max_length=20, blank=True)
    num_telefono = models.CharField(max_length=20, blank=True)
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
    total_asientos = models.PositiveIntegerField(default=180)
    disponible = models.BooleanField(default=True)
    def asientos_disponibles(self):
        compras_realizadas = CompraRealizada.objects.filter(carrito_comprado=self.id)
        if compras_realizadas.exists():
            total_asientos = self.total_asientos - CompraRealizada.objects.filter
            return total_asientos
        if self.total_asientos == 0:
            self.disponible = False
        return self.disponible
    def __str__(self):
        return f"{self.numero_vuelo}: {self.origen} -> {self.destino}"
class CarritoCompra(models.Model):
    usuario = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    vuelo = models.ForeignKey(Vuelo, on_delete=models.CASCADE)
    cantidad_asientos = models.PositiveIntegerField(default=1)
    monto = models.PositiveIntegerField(default=0)
    def asientos_a_reservar(self):
        cantidad_asientos = self.vuelo.asientos_disponibles()
        if cantidad_asientos != 1:
            cantidad_asientos *= self.cantidad_asientos
            return cantidad_asientos

    def monto_acumulado(self):
        precio = self.vuelo.precio
        if precio != 0 and self.cantidad_asientos != 1:
            monto = precio * self.cantidad_asientos
            return monto
    def __str__(self):
        return f"{self.usuario.username} - {self.vuelo.numero_vuelo} - {self.cantidad_asientos}"

class Pago(models.Model):
    usuario = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    numero_tarjeta = models.CharField(max_length=16)
    fecha_expiracion = models.DateField()
    codigo_seguridad = models.CharField(max_length=4)
    

    def __str__(self):
        return f"{self.usuario.username} - {self.numero_tarjeta}"

class CompraRealizada(models.Model):
    carrito_comprado = models.ForeignKey(CarritoCompra, on_delete=models.CASCADE)
    pago_realizado = models.ForeignKey(Pago, on_delete=models.CASCADE)
    fecha_compra = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.carrito_comprado.usuario} - {self.pago_realizado.pk}"