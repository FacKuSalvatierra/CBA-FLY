import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  id: number = 1;
  registrationForm: FormGroup;
  passwordVisible: boolean = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(14)]],
      confirmPassword: ['', [Validators.required]],
      term: [false, Validators.requiredTrue],
      termCon: [false],
      direccion: [''],
      codigo_postal: [''],
      pais: [''],
      ciudad: [''],
      dni: [''],
      num_telefono: ['']
    });
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  register(): void {
    if (this.registrationForm.invalid) {
      
      alert('Por favor, completa correctamente todos los campos.');
      return;
    }

    const url = 'http://localhost:8000/api/auth/signup/';
    const body = {
      email: this.registrationForm.value.email,
      username: this.registrationForm.value.username,
      password: this.registrationForm.value.password,
      direccion: '',
      codigo_postal: '',
      pais: '',
      ciudad: '',
      dni: '',
      num_telefono: ''
    };
    console.log(body);

    this.http.post(url, body).subscribe(
      (response: any) => {

        alert('Registro exitoso. Por favor inicia sesión.');
      },
      (error: any) => {
        console.error('Error al registrar:', error);

        alert('Error al registrar. Por favor inténtalo nuevamente.');
      }
    );
  }

  validar_registro() {

    if (this.registrationForm.invalid) {
      alert('Por favor completa todos los campos y acepta los términos y condiciones.');
      return;
    }

    if (this.registrationForm.value.password !== this.registrationForm.value.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }


    this.register();
  }
}