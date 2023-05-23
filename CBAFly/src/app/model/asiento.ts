export class Asiento {
  numeroAsiento: string;
  clase: string;
  precio: string;
  disponible: boolean;
  vuelo: string;

  constructor(
    numeroAsiento: string,
    clase: string,
    precio: string,
    vuelo: string
  ) {
    this.numeroAsiento = numeroAsiento;
    this.clase = clase;
    this.precio = precio;
    this.vuelo = vuelo;
  }
}
