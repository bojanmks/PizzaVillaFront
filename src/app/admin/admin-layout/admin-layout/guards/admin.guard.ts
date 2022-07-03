import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { ITokenData } from 'src/app/layout/layout/components/header/components/user-section/interfaces/i-token-data';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private jwtHelper: JwtHelperService,
    private router: Router
    ) {

  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token: string = localStorage.getItem('pv_auth');

    const tokenData: ITokenData = this.jwtHelper.decodeToken(token);

    const useCaseIds: number[] = JSON.parse(tokenData.UseCases);
    
    if(!useCaseIds.includes(17)) {
      this.router.navigateByUrl('/home');
      return false;
    }

    return true;
  }
  
}
