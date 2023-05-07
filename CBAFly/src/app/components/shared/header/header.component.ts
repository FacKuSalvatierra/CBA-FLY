import { Component, OnInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    const menuBtns = document.querySelectorAll(".nav-menu-btn");
    const closeBtn = document.querySelector(".nav-close-btn");
    const navigation = document.querySelector(".navegacion");

    menuBtns.forEach((menuBtn) => {
      menuBtn.addEventListener("click", () => {
        this.renderer.addClass(navigation, "active");
      });
    });

    closeBtn.addEventListener("click", () => {
      this.renderer.removeClass(navigation, "active");
    });
  }
}


