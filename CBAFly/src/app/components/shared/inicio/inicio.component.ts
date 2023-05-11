import { Component, ViewChild, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements AfterViewInit {

  @ViewChild('swiperContainer') swiperContainer: any;

  constructor() { }

  ngAfterViewInit() {
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
}
