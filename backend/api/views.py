from rest_framework import viewsets
from django.contrib.auth.models import User 
from rest_framework import status , generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import UsuarioSerializer, PagoSerializer,VueloSerializer, AsientoSerializer, CarritoCompraSerializer
from .models import Usuario, Pago, Vuelo, Asiento, CarritoCompra
from django.middleware import csrf
from django.http import HttpResponse



def my_view(request):

    response = HttpResponse()
    response["Access-Control-Allow-Origin"] = "*"
    response["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE"
    response["Access-Control-Allow-Headers"] = "Content-Type"
    response["Access-Control-Max-Age"] = "86400"  

    

    return response




class RegisterUserView(APIView):
    def post(self, request):
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



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
    queryset=CarritoCompra.objects.all()
    serializer_class=CarritoCompraSerializer
