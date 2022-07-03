import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ITokenData } from 'src/app/layout/layout/components/header/components/user-section/interfaces/i-token-data';
import { AdminService } from '../services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private adminService: AdminService,
    private router: Router
    ) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.adminService.isAdmin()) {
      this.router.navigateByUrl('/home');
      return false;
    }

    return true;
  }
  
}
