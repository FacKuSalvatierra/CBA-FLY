import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication.service';
import { TokenService } from 'src/app/services/token.service';
import { Configusuario } from 'src/app/model/configusuario';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
})
export class ConfigComponent {
  password: string;
  passwordVisible: boolean = false;

  isLogged = false;
  isLogginFail = false;
  configUsuario!: Configusuario;

  nombreCompleto!: string;
  correoElectronico!: string;
  telefono: string;
  dni: string;
  codigoPostal: string;
  pais: string;
  ciudad: string;

  contrasena!: string;
  errMsj!: string;
  form: FormGroup;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      nombreCompleto: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(80),
        ],
      ],
      correoElectronico: [
        '',
        [Validators.required, Validators.email, Validators.minLength(3)],
      ],
      contrasena: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  submit() {
    if (this.form.valid) {
      alert(
        'Por favor, verificá los campos requeridos y completalos según corresponda.'
      );
      return;
    }
    alert('Te has logeado correctamente.');
    console.log(this.form.value);
  }

  get NombreCompleto() {
    return this.form.get('nombreCompleto');
  }

  get Email() {
    return this.form.get('correoElectronico');
  }

  get Password() {
    return this.form.get('contrasena');
  }

  get Telefono() {
    return this.form.get('contrasena');
  }

  get Dni() {
    return this.form.get('contrasena');
  }

  get CodigoPostal() {
    return this.form.get('contrasena');
  }

  get Pais() {
    return this.form.get('contrasena');
  }

  get Ciudad() {
    return this.form.get('contrasena');
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    const passwordField = document.getElementById(
      'contrasena'
    ) as HTMLInputElement;
    passwordField.type = this.passwordVisible ? 'text' : 'password';
  }
}
