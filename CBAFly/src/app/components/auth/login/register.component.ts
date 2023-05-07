import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  id: number = 0;
  constructor(private rutaActiva: ActivatedRoute) {}

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }
}

// Validar registro
function validar_registro() {
  let name = document.getElementById('name_register').innerText;
  let email = document.getElementById('email_register').innerText;
  let pass = document.getElementById('password_register').innerText;
  let pass_conf = document.getElementById('password_register_conf').innerText;
  let terms = document.getElementById('term').innerText;
  if (name == '') {
    alert('Debe ingresar su nombre');
  } else if (email == '') {
    alert('Debe ingresar su correo electrónico');
  } else if (pass == '') {
    alert('Debe ingresar su contraseña');
  } else if (pass_conf == '') {
    alert('Debe confirmar su contraseña');
  } else if (terms == '') {
    alert('Debe aceptar los términos y condiciones');
  }
}
