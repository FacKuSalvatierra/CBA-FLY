import { Component, OnInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { Usuario } from "../../../model/usuario"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  username: string;
  usuario: Usuario;

  constructor(private renderer: Renderer2, private authService: AuthService, private router: Router) { }
  isAuthenticated: boolean = false;

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

    this.isAuthenticated$ = this.authService.isAuthenticated;
    this.authService.getUserData().subscribe(
      (usuario: Usuario) => {
        this.usuario = usuario;
      },
      (error: any) => {
        console.error('Error al obtener los datos del usuario:', error);
      }
    );
    // this.isAuthenticated$.subscribe((isAuthenticated) => {
    //   if (isAuthenticated) {
    //     this.authService.updateAuthStatus();
    //   }
    // });


    }
    onLogout() {
      this.authService.logout();
    }
  }
