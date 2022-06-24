import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLoggedIn$.pipe(
      map(e => {
        if (e) {
          return true;
        } else {
          this.router.navigateByUrl('/home');
          return false;
        }
      }),
      catchError((err) => {
        this.router.navigateByUrl('/home');
        return of(false);
      })
    );
  }
  
}
