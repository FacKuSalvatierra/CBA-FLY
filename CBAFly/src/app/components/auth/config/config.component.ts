import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication.service';
import { TokenService } from 'src/app/services/token.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
})
export class ConfigComponent implements OnInit {
  password: string;
  passwordVisible: boolean = false;

  isLogged = false;
  isLogginFail = false;
  configUsuario: Usuario;

  configForm: FormGroup;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.configForm = this.formBuilder.group({
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
      telefono: ['', [Validators.required, Validators.minLength(6)]],
      dni: ['', [Validators.required, Validators.minLength(4)]],
      codigoPostal: ['', [Validators.required, Validators.minLength(2)]],
      pais: ['', [Validators.required, Validators.minLength(1)]],
      ciudad: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  ngOnInit() {
    this.authService.getUserData().subscribe(
      (data: Usuario) => {
        this.configUsuario = data;
        this.configForm.patchValue({
          nombreCompleto: this.configUsuario.nombreCompleto,
          correoElectronico: this.configUsuario.correoElectronico,
          // Otros campos
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submit() {
    if (this.configForm.invalid) {
      alert(
        'Por favor, verifica los campos requeridos y complétalos según corresponda.'
      );
      return;
    }

    // Obtener los valores del formulario
    const formData = this.configForm.value;

    // Enviar los datos actualizados al backend
    this.authService.updateUserData(formData).subscribe(
      (response) => {
        alert('Los datos se han actualizado correctamente.');
        console.log(response);
      },
      (error) => {
        alert('Ha ocurrido un error al actualizar los datos.');
        console.log(error);
      }
    );
  }
}
