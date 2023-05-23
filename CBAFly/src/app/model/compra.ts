export class Compra {
  usuario: string;
  vuelo: string;
  cantidadAsientos: number;
  precioTotal: number;
  fechaCompra: string;
  numeroTarjeta: string;

  constructor(
    usuario: string,
    vuelo: string,
    cantidadAsientos: number,
    precioTotal: number,
    fechaCompra: string,
    numeroTarjeta: string
  ) {
    this.usuario = usuario;
    this.vuelo = vuelo;
    this.cantidadAsientos = cantidadAsientos;
    this.precioTotal = precioTotal;
    this.fechaCompra = fechaCompra;
    this.numeroTarjeta = numeroTarjeta;
  }
}
