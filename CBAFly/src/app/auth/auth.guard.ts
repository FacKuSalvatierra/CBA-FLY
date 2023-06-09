import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  CanActivate, 
  Router, 
  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthService } from '../services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isAuthenticated         // {1}
      .pipe(
        take(1),                              // {2} 
        map((isAuthenticated: boolean) => {         // {3}
          if (!isAuthenticated){
            this.router.navigate(['/login']);  // {4}
            return false;
          }
          return true;
        })
      )
  }
}