from django import forms
from .models import CarritoCompra

class CarritoCompraForm(forms.ModelForm):
    class Meta:
        model = CarritoCompra
        fields = ['vuelo', 'cantidad_asientos']
        widgets = {
            'cantidad_asientos': forms.NumberInput(attrs={'min': 1})
        }