import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'nombre-del-componente',
  templateUrl: './mercadopago.component.html',
  styleUrls: ['./mercadopago.component.css']
})
export class MercadoPagoComponent implements AfterViewInit  {
        ngAfterViewInit(): void {
          const script = document.createElement('script');
          script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
          script.dataset['preferenceId'] = '1273324264-f92cada3-65b7-4a53-a55b-af7cfb015eb6';
          script.dataset['source'] = 'button';
          document.getElementById('mercadoPagoButton').appendChild(script);
        }
}