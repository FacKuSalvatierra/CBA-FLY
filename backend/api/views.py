from rest_framework import viewsets
from django.contrib.auth.models import User 
from rest_framework import status , generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import UserSerializer, PagoSerializer,VueloSerializer, AsientoSerializer, CarritoCompraSerializer, CompraSerializer, CompraSerializer
from .models import CustomUser, Pago, Vuelo, Asiento, CarritoCompra, Compra
from django.middleware import csrf
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
import json
from django.shortcuts import render

# def my_view(request):
#     response = HttpResponse()
#     response["Access-Control-Allow-Origin"] = "*"
#     response["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE"
#     response["Access-Control-Allow-Headers"] = "Content-Type"
#     response["Access-Control-Max-Age"] = "86400"  
#     return response



class LoginView(APIView):
    def post(self, request):
        # Recuperamos las credenciales y autenticamos al usuario
        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(email=email, password=password)

        # Si es correcto añadimos a la request la información de sesión
        if user:
            login(request, user)
            return Response(
                status=status.HTTP_200_OK)

        # Si no es correcto devolvemos un error en la petición
        return Response(
            status=status.HTTP_404_NOT_FOUND)


class LogoutView(APIView):
    def post(self, request):
        # Borramos de la request la información de sesión
        logout(request)

        # Devolvemos la respuesta al cliente
        return Response(status=status.HTTP_200_OK)


class RegisterUserView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UsuarioViewSet(viewsets.ModelViewSet):
    queryset=CustomUser.objects.all()
    serializer_class=UserSerializer

class PagosViewSet(viewsets.ModelViewSet):
    queryset=Pago.objects.all()
    serializer_class=PagoSerializer
    def perform_create(self, serializer):
        usuario_id = self.request.data.get('usuario') # aquí obtenemos el id del usuario
        usuario = CustomUser.objects.get(id=usuario_id) # y lo buscamos en la base de datos
        serializer.save(usuario=usuario) # pasamos el objeto encontrado al serializer

class VueloViewSet(viewsets.ModelViewSet):
    queryset=Vuelo.objects.all()
    serializer_class=VueloSerializer


class AsientoViewSet(viewsets.ModelViewSet):
    queryset=Asiento.objects.all()
    serializer_class=AsientoSerializer

    
class CarritoCompraListCreateView(generics.ListCreateAPIView):
    queryset = CarritoCompra.objects.all()
    serializer_class = CarritoCompraSerializer

class CompraViewSet(viewsets.ModelViewSet):
    queryset=Compra.objects.all()
    serializer_class=CompraSerializer
