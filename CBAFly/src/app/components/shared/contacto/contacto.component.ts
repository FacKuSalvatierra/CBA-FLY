import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  constructor(private formBuilder : FormBuilder) { }

  get name() {
    return this.contactoForm.get('name');
  }

  get email() {
    return this.contactoForm.get('email');
  }

  get message() {
    return this.contactoForm.get('message');
  }

  contactoForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['',[Validators.required, Validators.minLength(15)]],
  });

  submit() {
    if (!this.contactoForm.valid) {
      alert('Por favor, verificá los campos requeridos y completalos según corresponda.');
      return;
    }
    
    console.log(this.contactoForm.value);
  }
}
