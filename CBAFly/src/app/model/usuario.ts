export class Usuario {
  nombreCompleto: string;
  correoElectronico: string;
  contrasena: string;

  constructor(
    nombreCompleto: string,
    correoElectronico: string,
    contrasena: string
  ) {
    this.nombreCompleto = nombreCompleto;
    this.correoElectronico = correoElectronico;
    this.contrasena = contrasena;
  }
}
