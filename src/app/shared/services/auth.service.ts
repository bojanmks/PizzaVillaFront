import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { API } from '../constants/apis';
import { CONFIG } from '../constants/config';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly localStorageTokenKey = 'pv_auth';
  private _isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {
    const token = localStorage.getItem(this.localStorageTokenKey);
    if (!this.jwtHelper.isTokenExpired(token)) {
      this._isLoggedIn$.next(!!token);
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(CONFIG.SERVER + API.login, {
      email,
      password
    }).pipe(tap((response: any) => {
      localStorage.setItem(this.localStorageTokenKey, response.token);
      this._isLoggedIn$.next(true);
    }));
  }

  register(email: string, password: string, username: string): Observable<any> {
    return this.http.post(CONFIG.SERVER + API.register, {
      email,
      password,
      username
    });
  }

  logout(): void {
    this._isLoggedIn$.next(false);
    localStorage.removeItem('pv_auth');
    this.router.navigateByUrl('/home');
  }
}
