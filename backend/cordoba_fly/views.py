from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import CarritoCompraForm
from .models import CarritoCompra
from django.urls import reverse_lazy
from django.contrib.auth.views import LoginView

def home(request):
    return render(request, 'base.html')

class CustomLoginView(LoginView):
    template_name = 'login.html'  # nombre de la plantilla de inicio de sesión
    redirect_authenticated_user = True  # redirigir usuarios autenticados a otra página

    def get_success_url(self):
        return reverse_lazy('carrito')  # URL a la que se redirige después de iniciar sesión con éxito

@login_required(login_url='login')  # Comprobar si el usuario está autenticado
def carrito(request):
    carrito_items = CarritoCompra.objects.filter(usuario=request.user)
    if request.method == 'POST':
        form = CarritoCompraForm(request.POST)
        if form.is_valid():
            carrito_item = form.save(commit=False)
            carrito_item.usuario = request.user
            carrito_item.save()
            return redirect('carrito')
    else:
        form = CarritoCompraForm()
    return render(request, 'carrito.html', {'carrito_items': carrito_items, 'form': form})
