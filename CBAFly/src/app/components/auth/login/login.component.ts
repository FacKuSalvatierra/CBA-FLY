import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/authentication.service';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  passwordVisible: boolean = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(14)]],
    });
  }
  

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  submit(): void {
    if (this.loginForm.invalid) {
      alert('Por favor, verifica los campos requeridos y completa correctamente los datos.');
      return;
    }
  
    const url = 'http://localhost:8000/api/auth/login/';
    const body = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    console.log(body);
  
    const loginUsuario: Usuario = { 
      username: null,
      email: body.email,
      password: body.password
    };
  
    this.http.post(url, body).subscribe(
      (response: any) => {
        alert('Inicio de sesión exitoso.');
        this.authService.login(loginUsuario);

      },
      (error: any) => {
        console.error('Error al iniciar sesión:', error);
        alert('Error al iniciar sesión. Por favor, inténtalo nuevamente.');
      }
    );
    this.authService.getUserDataByEmail(this.loginForm.value.email).subscribe(
      (userData) => {
        // Aquí puedes utilizar los datos del usuario, incluido el campo de username
        console.log('Usuario actual:', userData);
        // Continuar con las acciones necesarias después de obtener los datos del usuario
      },
      (error) => {
        console.error('Error al obtener los datos del usuario', error);
      }
    );
  }
  
}
