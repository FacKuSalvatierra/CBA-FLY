from django.contrib import admin
from .models import Usuario, Pago,Vuelo,Asiento,Compra
# Register your models here.

admin.site.register(Usuario)
admin.site.register(Pago)
admin.site.register(Vuelo)
admin.site.register(Asiento)
admin.site.register(Compra)