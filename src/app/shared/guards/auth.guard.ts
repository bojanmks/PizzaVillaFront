import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { NeedToBeLoggedInDialogComponent } from '../components/need-to-be-logged-in-dialog/need-to-be-logged-in-dialog.component';
import { AuthService } from '../services/auth.service';
import { NeedToBeLoggedInDialogService } from '../services/need-to-be-logged-in-dialog.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private needToBeLoggedInService: NeedToBeLoggedInDialogService
  ) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLoggedIn$.pipe(
      map(e => {
        if (e) {
          return true;
        } else {
          this.router.navigateByUrl('/home');
          this.needToBeLoggedInService.openDialog();
          return false;
        }
      }),
      catchError((err) => {
        this.router.navigateByUrl('/home');
        this.needToBeLoggedInService.openDialog();
        return of(false);
      })
    );
  }
  
}
