import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://portfolioprmap.herokuapp.com/auth';

  constructor(private httpA: HttpClient) {}
  
 public nuevo(nuevoUsuario: Usuario): Observable<any>{
  return this.httpA.post<any>(this.url + '/nuevo', nuevoUsuario);
}

public login(loginUsuario: Usuario): Observable<any>{
  return this.httpA.post<any>(this.url + '/login', loginUsuario)
}
}
