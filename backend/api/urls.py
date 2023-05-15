from django.urls import path,include
from rest_framework import routers
from apiview import views

router=routers.DefaultRouter()
router.register(r'usuarios',views.UsuarioViewSet)
router.register(r'pagos',views.PagosViewSet)
router.register(r'carritocompra',views.CarritoCompraViewSet)
urlpatterns = [
    path('',include(router.urls))
]