import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication.service';
import { TokenService } from 'src/app/services/token.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  password: string;
  passwordVisible: boolean = false;

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: Usuario;
  nombreCompleto!: string;
  correoElectronico!: string;
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
      nombreCompleto: ['', [Validators.required, Validators.minLength(1)]],
      correoElectronico: [
        '',
        [Validators.required, Validators.email, Validators.minLength(3)],
      ],
      contrasena: ['', [Validators.required, Validators.minLength(4)]],
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

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    const passwordField = document.getElementById(
      'contrasena'
    ) as HTMLInputElement;
    passwordField.type = this.passwordVisible ? 'text' : 'password';
  }
}
