import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {}
const pwShowHide = document.querySelectorAll('.showHidePw'),
  pwFields = document.querySelectorAll('.password');

//Mostrar u ocultar contraseña
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener('click', () => {
    pwFields.forEach((pwField) => {
      if (pwField === pwField) {
        pwField = this;

        pwShowHide.forEach((icon) => {
          icon.classList.replace('uil-eye-slash', 'uil-eye');
        });
      } else {
        pwField = this;

        pwShowHide.forEach((icon) => {
          icon.classList.replace('uil-eye', 'uil-eye-slash');
        });
      }
    });
  });
});

// Validar inicio sesión
function validar_inicio() {
  let email = document.getElementById('email_login').innerText;
  let pass = document.getElementById('password_login').innerText;
  if (email == '') {
    alert('Debe ingresar su correo electrónico');
  } else if (pass == '') {
    alert('Debe ingresar su contraseña');
  }
}
