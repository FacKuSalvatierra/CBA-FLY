import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  carritoItems: any[];
  tarjetaForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient)  { }

ngOnInit(): void {
  this.tarjetaForm = this.formBuilder.group({
    numeroTarjeta: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
    nombreTitular: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    fechaVencimiento: ['', [Validators.required, Validators.pattern('^((0[1-9])|(1[0-2]))/?([0-9]{4}|[0-9]{2})$')]],
    codigoSeguridad: ['', [Validators.required, Validators.pattern('[0-9]{3,4}')]],
  });
  this.http.get<any>('http://127.0.0.1:8000/api/carrito/').subscribe(
    (data) => {
      this.carritoItems = data; // Almacenar los datos del carrito en una variable
    },
    (error) => {
      console.log(error);
    }
  );
}
calcularSubtotal(): string {
  let subtotal = 0;
  for (const item of this.carritoItems) {
    subtotal += item.vuelo.precio * item.cantidad_asientos;
  }
  return subtotal.toFixed(3);
}

calcularTotal(): string {
  const subtotal = Number(this.calcularSubtotal());
  const cargosAplicados = 3.250; // Coloca el valor de los cargos aplicados aquí
  const total = subtotal + cargosAplicados;
  return total.toFixed(3); 
}
actualizarCarrito() {
  this.http.get<any>('http://127.0.0.1:8000/api/carrito/').subscribe(
    (data) => {
      this.carritoItems = data;
    },
    (error) => {
      console.log(error);
    }
  );
}

submitForm(): void {
  if (this.tarjetaForm.valid) {
    // Realizar acciones adicionales, como enviar los datos al servidor
    console.log('Formulario válido. Enviar datos al servidor.');
    // Si valida todos los campos, envio datos a la consola
    console.log(this.tarjetaForm.value);
  } 
  else {
    // Marcar los campos inválidos como tocados para mostrar los mensajes de error
    Object.keys(this.tarjetaForm.controls).forEach(key => {
      this.tarjetaForm.controls[key].markAsTouched();
      alert("Error al ingresar los datos");
    });
  }
  
}

detectarTipoTarjeta(): string {
  const numeroTarjeta = this.tarjetaForm.value ["numeroTarjeta"];
  
  // Expresiones regulares para identificar los diferentes tipos de tarjeta
  const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const mastercardRegex = /^5[1-5][0-9]{14}$/;
  const amexRegex = /^3[47][0-9]{13}$/;
  const discoverRegex = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
  
  let tipoTarjeta = "";
  
  if (visaRegex.test(numeroTarjeta)) {  
    tipoTarjeta = "Visa";
  } else if (mastercardRegex.test(numeroTarjeta)) {
    tipoTarjeta = 'Mastercard';
  } else if (amexRegex.test(numeroTarjeta)) {
    tipoTarjeta = 'American Express';
  } else if (discoverRegex.test(numeroTarjeta)) {
    tipoTarjeta = 'Discover';
  }
  return tipoTarjeta;
}
}

// Nota: El button de pago no se habilita hasta que esten todos los campos validados correctamente