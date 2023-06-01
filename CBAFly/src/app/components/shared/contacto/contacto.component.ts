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

  contactoForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: [''],
    message: [''],
  });

  onSubmit() {
    console.log(this.contactoForm.value);
  }
}
