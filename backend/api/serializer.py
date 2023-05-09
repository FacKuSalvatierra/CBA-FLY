from rest_framework import serializers
from .models import Usuario, Vuelo, Asiento, Pago, Compra, CarritoCompra

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('id', 'nombre_completo', 'correo_electronico', 'contrasena')

class VueloSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vuelo
        fields = ('id', 'origen', 'destino', 'hora_salida', 'hora_llegada', 'duracion', 'numero_vuelo', 'tipo_avion')

class AsientoSerializer(serializers.ModelSerializer):
    vuelo = VueloSerializer()

    class Meta:
        model = Asiento
        fields = ('id', 'numero_asiento', 'clase', 'precio', 'disponible', 'vuelo')

class PagoSerializer(serializers.ModelSerializer):
    usuario = UsuarioSerializer()

    class Meta:
        model = Pago
        fields = ('id', 'usuario', 'numero_tarjeta', 'fecha_expiracion', 'codigo_seguridad')

class CompraSerializer(serializers.ModelSerializer):
    usuario = UsuarioSerializer()
    vuelo = VueloSerializer()

    class Meta:
        model = Compra
        fields = ('id', 'usuario', 'vuelo', 'cantidad_asientos', 'precio_total', 'fecha_compra', 'numero_tarjeta')

class CarritoCompraSerializer(serializers.ModelSerializer):
    usuario = UsuarioSerializer()
    vuelo = VueloSerializer()

    class Meta:
        model = CarritoCompra
        fields = ('id', 'usuario', 'vuelo', 'cantidad_asientos')