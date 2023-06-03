import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication.service';
import { TokenService } from 'src/app/services/token.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  id: number = 0;

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
    private rutaActiva: ActivatedRoute,
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
    let name = document.getElementById('name_register') as HTMLInputElement;
    let email = document.getElementById('email_register') as HTMLInputElement;
    let password = document.getElementById(
      'password_register'
    ) as HTMLInputElement;
    let confirmPassword = document.getElementById(
      'password'
    ) as HTMLInputElement;
    let term = document.getElementById('term') as HTMLInputElement;

    // Validar que todos los campos estén completos
    if (
      name.value === '' ||
      email.value === '' ||
      password.value === '' ||
      confirmPassword.value === '' ||
      !term.checked
    ) {
      alert(
        'Por favor completa todos los campos y acepta los términos y condiciones.'
      );
      return;
    }

    // Validar que la contraseña y su confirmación coincidan
    if (password.value !== confirmPassword.value) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Validar que el correo electrónico sea válido
    if (!this.validarEmail(email.value)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }

    // Si se pasaron todas las validaciones, entonces se puede enviar el formulario de registro
    alert('Registro exitoso.');
  }

  validarEmail(email: string): boolean {
    // Expresión regular para validar correos electrónicos
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    const passwordField = document.getElementById(
      'password'
    ) as HTMLInputElement;
    passwordField.type = this.passwordVisible ? 'text' : 'password';
  }
}
