import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/admin/admin-layout/admin-layout/services/admin.service';
import { ICartItemGet } from 'src/app/cart/cart/interfaces/i-cart-item';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { LoginComponent } from './components/login/login.component';
import { ITokenData } from './interfaces/i-token-data';

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.scss']
})
export class UserSectionComponent implements OnInit {

  tokenData: ITokenData;
  dropdownIsVisible: boolean = false;
  cartAmount: number = 0;
  private subscription: Subscription;

  @HostListener("window:click", [])
  onWindowClick(): void {
    this.dropdownIsVisible = false;
  }

  constructor(
    public authService: AuthService,
    public adminService: AdminService,
    private dialog: MatDialog,
    public cartService: CartService
  ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((data) => {
      if(data) {
        this.tokenData = this.authService.getUser();
        this.addCartServiceSubscription();
        this.cartService.notifySubscribers();
      }
    });
  }

  private addCartServiceSubscription(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
    
    this.subscription = this.cartService.getAllSubject$.subscribe({
      next: (data) => {
        this.cartAmount = Object.values(data as ICartItemGet[]).reduce((t, { amount }) => t + amount, 0);
      },
      error: (err) => {
        console.error(err);
      }
    });
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
