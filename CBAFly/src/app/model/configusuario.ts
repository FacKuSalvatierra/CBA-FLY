export class Configusuario {
  nombreCompleto: string;
  correoElectronico: string;
  telefono: string;
  dni: string;
  codigoPostal: string;
  pais: string;
  ciudad: string;

  constructor(
    nombreCompleto: string,
    correoElectronico: string,
    telefono: string,
    dni: string,
    codigoPostal: string,
    pais: string,
    ciudad: string
  ) {
    this.nombreCompleto = nombreCompleto;
    this.correoElectronico = correoElectronico;
    this.telefono = telefono;
    this.dni = dni;
    this.codigoPostal = codigoPostal;
    this.pais = pais;
    this.ciudad = ciudad;
  }
}
