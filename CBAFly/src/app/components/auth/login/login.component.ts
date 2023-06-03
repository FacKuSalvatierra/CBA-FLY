import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  password: string;
  passwordVisible: boolean = false;
  email: string;

  constructor(private router: Router, private http: HttpClient) {}

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  login(): void {
    const url = 'http://127.0.0.1:8000/api/token/'; // Reemplaza con la URL correcta del endpoint de inicio de sesión
    const email = (document.getElementById('email_login') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const body = { correo_electronico: this.email, contrasena: this.password };

    this.http.post(url, body).subscribe(
      (response: any) => {
        const token = response.access;
        localStorage.setItem('token', token); // Almacena el token en el almacenamiento local

        // Redirige al usuario a la página correspondiente después de iniciar sesión
        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.error('Error al iniciar sesión:', error);
        // Muestra un mensaje de error
        alert('Correo electrónico o contraseña incorrectos');
      }
    );
  }

  validar_inicio() {
    const email = (document.getElementById('email_login') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    // Validar que los campos estén completos
    if (!email || !password) {
      alert('Por favor ingresa tu correo electrónico y contraseña.');
      return;
    }

    // Realizar el inicio de sesión
    this.login();
  }
}
