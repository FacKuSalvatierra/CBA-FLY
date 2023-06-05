from rest_framework import viewsets
from django.contrib.auth.models import User 
from rest_framework import status , generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import UsuarioSerializer, PagoSerializer,VueloSerializer, AsientoSerializer, CarritoCompraSerializer
from .models import Usuario, Pago, Vuelo, Asiento, CarritoCompra
from rest_framework import status
from django.contrib.auth import authenticate, login, logout












class SignupView(generics.CreateAPIView):
    serializer_class = UsuarioSerializer

class RegisterUserView(APIView):
    def post(self, request):
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    

class LoginUserView(APIView):
    
    
    def post(self, request):
        # Recuperamos las credenciales y autenticamos al usuario
        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(email=email, password=password)
        # Si es correcto añadimos a la request la información de sesión
        if user:
            login(request, user)
            return Response(
                UsuarioSerializer(user).data,
                status=status.HTTP_200_OK)
        # Si no es correcto devolvemos un error en la petición
        return Response(
            status=status.HTTP_404_NOT_FOUND)


class LogoutUserView(APIView):
   
    def post(self, request):
        # Borramos de la request la información de sesión
        logout(request)

        # Devolvemos la respuesta al cliente
        return Response(status=status.HTTP_200_OK)
class SignupView(generics.CreateAPIView):
    serializer_class = UsuarioSerializer
        
# class LogoutView(APIView):
    
#     def post(self, request):
#         # Borramos de la request la información de sesión
#         logout(request)

#         # Devolvemos la respuesta al cliente
#         return Response(status=status.HTTP_200_OK)
            
        




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
