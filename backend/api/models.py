from django.db import models

# Create your models here.
class Usuario(models.Model):
    nombre_completo = models.CharField(max_length=100)
    correo_electronico = models.EmailField(max_length=100, unique=True)
    contrasena = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre_completo

class Vuelo(models.Model):
    origen = models.CharField(max_length=100)
    destino = models.CharField(max_length=100)
    hora_salida = models.DateTimeField()
    hora_llegada = models.DateTimeField()
    duracion = models.PositiveIntegerField()
    numero_vuelo = models.CharField(max_length=100)
    tipo_avion = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.numero_vuelo}: {self.origen} -> {self.destino}"

class Asiento(models.Model):
    numero_asiento = models.PositiveIntegerField()
    clase = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    disponible = models.BooleanField(default=True)
    vuelo = models.ForeignKey(Vuelo, on_delete=models.CASCADE)

    def __str__(self):
        return f"Asiento {self.numero_asiento} ({self.clase}) - Vuelo {self.vuelo.numero_vuelo}"

class Pago(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    numero_tarjeta = models.CharField(max_length=16)
    fecha_expiracion = models.DateField()
    codigo_seguridad = models.CharField(max_length=4)

    def __str__(self):
        return f"{self.usuario.nombre_completo} - {self.numero_tarjeta}"

class Compra(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    vuelo = models.ForeignKey(Vuelo, on_delete=models.CASCADE)
    cantidad_asientos = models.PositiveIntegerField()
    precio_total = models.DecimalField(max_digits=10, decimal_places=2)
    fecha_compra = models.DateTimeField(auto_now_add=True)
    numero_tarjeta = models.CharField(max_length=16)

    def __str__(self):
        return f"{self.usuario.nombre_completo} - {self.vuelo.numero_vuelo}"

class CarritoCompra(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    vuelo = models.ForeignKey(Vuelo, on_delete=models.CASCADE)
    cantidad_asientos = models.PositiveIntegerField()

    class Meta:
        unique_together = [("usuario", "vuelo")]

    def __str__(self):
        return f"{self.usuario.nombre_completo} - {self.vuelo.numero_vuelo}"
