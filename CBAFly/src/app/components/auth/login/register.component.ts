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
  term: boolean = false;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private rutaActiva: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      correoElectronico: [
        '',
        [Validators.required, Validators.email, Validators.minLength(3)],
      ],
      contrasena: ['', [Validators.required, Validators.minLength(5)]],
      term: ['', [Validators.requiredTrue]],
    });
  }

  submit() {
    alert("Te registraste correctamente.")
    console.log(this.form.value);
  }


  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
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

  get Term() {
    return this.form.get('term');
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    const passwordField = document.getElementById(
      'password'
    ) as HTMLInputElement;
    passwordField.type = this.passwordVisible ? 'text' : 'password';
  }
}
