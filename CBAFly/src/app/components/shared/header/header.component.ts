import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
window.onload = function () {
  const menuBtn = document.querySelector('.nav-menu-btn');
  const closeBtn = document.querySelector('.nav-close-btn');
  const navigation = document.querySelector('.navegacion');

  menuBtn.addEventListener('click', () => {
    navigation.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    navigation.classList.remove('active');
  });

  //Efectos de la barra de navegacion al scrollear
  window.onscroll = function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  };
};
