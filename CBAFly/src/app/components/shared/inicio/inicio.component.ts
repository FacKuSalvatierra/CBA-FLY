import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swiper from 'swiper';
declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements AfterViewInit, OnInit {
  catalogData: any[];
  currentPage: number = 1;
  totalPages: number = 0;

  @ViewChild('swiperContainer') swiperContainer: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://127.0.0.1:8000/api/vuelo/').subscribe(
      (data) => {
        this.catalogData = data; // Asignar los datos del catálogo al array
        this.totalPages = Math.ceil(this.catalogData.length / 6);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngAfterViewInit() {
    $('.selectpicker').selectpicker();
    const swiper = new Swiper('.bg-slider-thumbs', {
      loop: true,
      spaceBetween: 0,
      slidesPerView: 0,
    });
    var swiper2 = new Swiper('.bg-slider', {
      loop: true,
      spaceBetween: 0,
      thumbs: {
        swiper: swiper,
      },
    });
  }

  getPaginatedData(): any[] {
    if (this.catalogData) {
      const startIndex = (this.currentPage - 1) * 6;
      const endIndex = startIndex + 6;
      return this.catalogData.slice(startIndex, endIndex);
    }
    return []; // Retorna un array vacío si this.catalogData es undefined o nulo
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
