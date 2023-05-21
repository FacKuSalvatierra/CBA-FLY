export class Vuelo {
  origen: string;
  destino: string;
  horaSalida: string;
  horaLlegada: string;
  duracion: string;
  numeroVuelo: string;
  tipoAvion: string;

  constructor(
    origen: string,
    destino: string,
    horaSalida: string,
    horaLlegada: string,
    duracion: string,
    numeroVuelo: string,
    tipoAvion: string
  ) {
    this.origen = origen;
    this.destino = destino;
    this.horaSalida = horaSalida;
    this.horaLlegada = horaLlegada;
    this.duracion = duracion;
    this.numeroVuelo = numeroVuelo;
    this.tipoAvion = tipoAvion;
  }
}
