import { Component, OnInit } from '@angular/core';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css'],
})
export class NosotrosComponent implements OnInit {
  public personajes:any = [];

  constructor(private vuelos: VuelosService) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  public cargarDatos() {
    this.vuelos
      .get('http://localhost:3000/characters')
      .subscribe(respuesta => {
        this.personajes = respuesta;
      });
  }
}
