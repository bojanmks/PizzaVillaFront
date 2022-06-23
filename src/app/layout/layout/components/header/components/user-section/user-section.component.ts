import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { ITokenData } from './interfaces/i-token-data';

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.scss']
})
export class UserSectionComponent implements OnInit {

  user: ITokenData;
  dropdownIsVisible: boolean = false;

  @HostListener("window:click", [])
  onWindowClick(): void {
    this.dropdownIsVisible = false;
  }

  constructor(
    public authService: AuthService,
    private dialog: MatDialog,
    private jwtHelperService: JwtHelperService
  ) { }

  ngOnInit(): void {
    this.decodeJwt();
  }

  decodeJwt(): void {
    const token = localStorage.getItem('pv_auth');
    if(token) {
      this.user = this.jwtHelperService.decodeToken(token);
    }
  }

  openLoginDialog(): void {
    this.dialog.open(LoginComponent, {
      width: 'auto'
    });
  }

  toggleDropdownVisibility(e: any): void {
    e.stopPropagation();
    this.dropdownIsVisible = !this.dropdownIsVisible;
  }
}
