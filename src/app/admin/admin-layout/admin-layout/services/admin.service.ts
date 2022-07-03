import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ITokenData } from 'src/app/layout/layout/components/header/components/user-section/interfaces/i-token-data';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private jwtHelper: JwtHelperService
  ) { }

  isAdmin(): boolean {
    const token: string = localStorage.getItem('pv_auth');
    const tokenData: ITokenData = this.jwtHelper.decodeToken(token);
    const useCaseIds: number[] = JSON.parse(tokenData.UseCases);

    return useCaseIds.includes(17);
  }
}
