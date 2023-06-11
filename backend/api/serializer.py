from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import CustomUser, Vuelo, Asiento, Pago, Compra, CarritoCompra
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True)
    username = serializers.CharField(
        required=True)
    password = serializers.CharField(min_length=8)
    direccion = serializers.CharField(required=False, allow_blank=True)
    codigo_postal = serializers.CharField(required=False, allow_blank=True)
    pais = serializers.CharField(required=False, allow_blank=True)
    ciudad = serializers.CharField(required=False, allow_blank=True)
    dni = serializers.CharField(required=False, allow_blank=True)
    num_telefono = serializers.CharField(required=False, allow_blank=True)

    def validate_password(self, value):
        return make_password(value)

    class Meta:
        model = get_user_model()
        fields = ('email', 'username', 'password', 'direccion', 'codigo_postal', 'pais', 'ciudad', 'dni', 'num_telefono')



        
        
class VueloSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vuelo
        fields = ('id', 'origen', 'destino', 'hora_salida', 'hora_llegada', 'precio','duracion', 'numero_vuelo', 'tipo_avion')

class AsientoSerializer(serializers.ModelSerializer):
    vuelo = VueloSerializer()

    class Meta:
        model = Asiento
        fields = ('id', 'numero_asiento', 'clase', 'disponible', 'vuelo')

class PagoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pago
        fields = ('id', 'usuario', 'numero_tarjeta', 'fecha_expiracion', 'codigo_seguridad')

class CompraSerializer(serializers.ModelSerializer):
    usuario = UserSerializer()
    vuelo = VueloSerializer()

    class Meta:
        model = Compra
        fields = ('id', 'usuario', 'vuelo', 'cantidad_asientos', 'precio_total', 'fecha_compra', 'numero_tarjeta')

class CarritoCompraSerializer(serializers.ModelSerializer):
    usuario = UserSerializer()
    vuelo = VueloSerializer()

    class Meta:
        model = CarritoCompra
        fields = ('id', 'usuario', 'vuelo', 'cantidad_asientos')
        
        
