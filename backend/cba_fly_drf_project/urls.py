from django.contrib import admin
from django.urls import path,include

from api.views import RegisterUserView, LoginUserView, LogoutUserView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('api.urls')),
    
  
    path('api/register/', RegisterUserView.as_view(), name='register_user'),
    path('api/login/', LoginUserView.as_view(), name='login_user'), 
    path('api/logout/', LogoutUserView.as_view(), name='logout_user'), ]
   



