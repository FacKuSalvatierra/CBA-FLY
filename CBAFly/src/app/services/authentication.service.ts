import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Usuario } from '../model/usuario';
import { Configusuario } from 'src/app/model/configusuario';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: '';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  public get isAuthenticated() {
    return this.isAuthenticatedSubject.asObservable();
  }

  constructor(private httpA: HttpClient, private router: Router, private location: Location) {

    this.checkAuthStatus();
  }

  public updateAuthStatus() {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  private checkAuthStatus() {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  public login(loginUsuario: Usuario) {
    if (loginUsuario.correoElectronico !== '' && loginUsuario.contrasena !== '') {
      console.log('Logging in...');
      localStorage.setItem('isAuthenticated', 'true');
      this.isAuthenticatedSubject.next(true);
      this.updateAuthStatus();
  
      // Redirigir a "/inicio" utilizando navigateByUrl con "replaceUrl" activado
      this.router.navigateByUrl('/inicio', { replaceUrl: true }).then(() => {
        // Recargar la página utilizando el objeto Location
        this.location.go('/');
        location.reload();
      });
    }
  }
  


  public logout() {
    console.log('Logging out...');
    localStorage.removeItem('isAuthenticated');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  public getUserData(): Observable<Usuario> {
    return this.httpA.get<Usuario>("http://127.0.0.1:8000/api/usuarios/");
  }

  public getUserDataByEmail(email: string): Observable<Usuario> {
    return this.httpA.get<Usuario>(`${this.url}/usuarios/?email=${email}`);
  }

  public updateUserData(userData: Usuario): Observable<any> {
    return this.httpA.put<any>(this.url + '/userData', userData);
  }
}
