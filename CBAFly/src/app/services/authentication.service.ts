import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://portfolioprmap.herokuapp.com/auth';

  constructor(private httpA: HttpClient) {}
}
