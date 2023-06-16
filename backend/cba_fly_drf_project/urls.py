from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from api.views import RegisterUserView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
   



