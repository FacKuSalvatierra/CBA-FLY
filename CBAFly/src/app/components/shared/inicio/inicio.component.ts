import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {}

window.onload = function () {
  var swiper = new Swiper('.bg-slider-thumbs', {
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
};
