from rest_framework import viewsets
from .serializer import UsuarioSerializer, PagoSerializer,VueloSerializer, AsientoSerializer, CarritoCompraSerializer
from .models import Usuario, Pago, Vuelo, Asiento, CarritoCompra

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset=Usuario.objects.all()
    serializer_class=UsuarioSerializer

class PagosViewSet(viewsets.ModelViewSet):
    queryset=Pago.objects.all()
    serializer_class=PagoSerializer
    def perform_create(self, serializer):
        usuario_id = self.request.data.get('usuario') # aquí obtenemos el id del usuario
        usuario = Usuario.objects.get(id=usuario_id) # y lo buscamos en la base de datos
        serializer.save(usuario=usuario) # pasamos el objeto encontrado al serializer

class VueloViewSet(viewsets.ModelViewSet):
    queryset=Vuelo.objects.all()
    serializer_class=VueloSerializer


class AsientoViewSet(viewsets.ModelViewSet):
    queryset=Asiento.objects.all()
    serializer_class=AsientoSerializer


class CarritoCompraViewSet(viewsets.ModelViewSet):
    queryset= CarritoCompra.objects.all()
    serializer_class=CarritoCompraSerializer
    def perform_create(self, serializer):
        usuario_id = self.request.data.get('usuario')
        usuario = Usuario.objects.get(id=usuario_id)
        serializer.save(usuario=usuario)