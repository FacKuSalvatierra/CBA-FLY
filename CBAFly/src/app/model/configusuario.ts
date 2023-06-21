export class Configusuario {
  username: string;
  email: string;
  telefono: string;
  dni: string;
  codigoPostal: string;
  pais: string;
  ciudad: string;

  constructor(
    username: string,
    email: string,
    telefono: string,
    dni: string,
    codigoPostal: string,
    pais: string,
    ciudad: string
  ) {
    this.username = username;
    this.email = email;
    this.telefono = telefono;
    this.dni = dni;
    this.codigoPostal = codigoPostal;
    this.pais = pais;
    this.ciudad = ciudad;
  }
}
