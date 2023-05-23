import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  password: string;
  passwordVisible: boolean = false;
  constructor(private router: Router) {}

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    const passwordField = document.getElementById('password') as HTMLInputElement;
    passwordField.type = this.passwordVisible ? 'text' : 'password';
  }
  validar_inicio() {
    const email = (document.getElementById('email_login') as HTMLInputElement).value;
    const password = this.password;
    // Validar credenciales del usuario aquí
    if (email === 'usuario@example.com' && password === '12345') {
      // Redirigir al usuario a la página correspondiente después de iniciar sesión
      this.router.navigate(['/home']);
    } else {
      // Mostrar un mensaje de error
      alert('Correo electrónico o contraseña incorrectos');
    }
  }
}
