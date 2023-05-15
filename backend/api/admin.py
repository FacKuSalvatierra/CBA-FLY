from django.contrib import admin
from .models import Usuario, Pago, CarritoCompra
# Register your models here.

admin.site.register(Usuario)
admin.site.register(Pago)
admin.site.register(CarritoCompra)