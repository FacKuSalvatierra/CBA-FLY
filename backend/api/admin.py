
from django.contrib import admin
from .models import Usuario, Pago,Vuelo,Asiento, CarritoCompra
from django.contrib.auth import get_user_model
# from django.contrib.auth.admin import UserAdmin
# Register your models here.

admin.site.register(Usuario)
admin.site.register(Pago)
admin.site.register(Vuelo)
admin.site.register(Asiento)
admin.site.register(CarritoCompra)

# @admin.register(get_user_model() )
# class CustomUserAdmin(UserAdmin) :
#     pass