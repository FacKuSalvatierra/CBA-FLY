import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  id: number = 1;
  password: string;
  passwordVisible: boolean = false;
  name: string;
  email: string;
  confirmPassword: string;

  constructor(private http: HttpClient) {}

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  register(): void {
    const url = 'http://127.0.0.1:8000/api/register/';
    const body = { nombre_completo: this.name, correo_electronico: this.email, contrasena: this.password };

    this.http.post(url, body).subscribe(
      (response: any) => {
        // Registro exitoso, puedes redirigir al usuario a otra página si es necesario
        alert('Registro exitoso. Por favor inicia sesión.');
      },
      (error: any) => {
        console.error('Error al registrar:', error);
        // Muestra un mensaje de error
        alert('Error al registrar. Por favor inténtalo nuevamente.');
      }
    );
  }

  validar_registro() {
    // Validar que todos los campos estén completos
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      alert('Por favor completa todos los campos y acepta los términos y condiciones.');
      return;
    }

    // Validar que la contraseña y su confirmación coincidan
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Validar que el correo electrónico sea válido
    if (!this.validarEmail(this.email)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }

    // Si se pasaron todas las validaciones, entonces se puede enviar el formulario de registro
    this.register();
  }

  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
