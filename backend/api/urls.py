from django.urls import path,include
from rest_framework import routers
from api import views

router=routers.DefaultRouter()
router.register(r'usuarios',views.UsuarioViewSet)
router.register(r'pagos',views.PagosViewSet)
router.register(r'vuelo',views.VueloViewSet)
router.register(r'asiento',views.AsientoViewSet)
router.register(r'carritocompra',views.CarritoCompraViewSet)
urlpatterns = [
    path('',include(router.urls))
]
