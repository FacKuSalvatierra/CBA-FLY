
from django.contrib import admin
from .models import CustomUser, Pago,Vuelo, CarritoCompra, CompraRealizada
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group  

admin.site.unregister(Group) 
admin.site.register(Pago)
admin.site.register(Vuelo)
admin.site.register(CarritoCompra)
admin.site.register(CompraRealizada)

@admin.register(get_user_model())
class CustomUserAdmin(UserAdmin):
    pass