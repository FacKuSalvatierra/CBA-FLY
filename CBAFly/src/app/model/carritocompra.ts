export class Carritocompra {
  usuario: string;
  vuelo: string;
  cantidadAsientos: number;

  constructor(usuario: string, vuelo: string, cantidadAsientos: number) {
    this.usuario = usuario;
    this.vuelo = vuelo;
    this.cantidadAsientos = cantidadAsientos;
  }
}
