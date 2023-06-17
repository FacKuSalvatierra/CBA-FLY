from django.urls import path,include
from rest_framework import routers
from api import views
from .views import LoginView, LogoutView, RegisterUserView

router=routers.DefaultRouter()
router.register(r'usuarios',views.UsuarioViewSet)
router.register(r'pagos',views.PagosViewSet)
router.register(r'vuelo',views.VueloViewSet)
router.register(r'asiento',views.AsientoViewSet)
router.register(r'carrito',views.CarritoCompraViewSet)

urlpatterns = [
    path('',include(router.urls)),
    path('auth/login/', LoginView.as_view(), name='auth_login'),
    path('auth/logout/',LogoutView.as_view(), name='auth_logout'),
    path('auth/signup/', RegisterUserView.as_view(), name='register_user'),
    path('checkout/', views.checkout, name='checkout'),
]


