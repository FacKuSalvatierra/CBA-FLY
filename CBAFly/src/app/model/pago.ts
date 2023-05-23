export class Pago {
  usuario: string;
  numeroTarjeta: string;
  fechaExpiracion: string;
  codigoSeguridad: string;

  constructor(
    usuario: string,
    numeroTarjeta: string,
    fechaExpiracion: string,
    codigoSeguridad: string
  ) {
    this.usuario = usuario;
    this.numeroTarjeta = numeroTarjeta;
    this.fechaExpiracion = fechaExpiracion;
    this.codigoSeguridad = codigoSeguridad;
  }
}
