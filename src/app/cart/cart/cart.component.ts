import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { CONFIG } from 'src/app/shared/constants/config';
import { ICartItemGet } from 'src/app/cart/cart/interfaces/i-cart-item';
import { IErrorMessage } from 'src/app/shared/interfaces/i-error-message';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: ICartItemGet[];
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    SpinnerFunctions.showSpinner();
    this.cartService.getAll().subscribe({
      next: (data) => {
        SpinnerFunctions.hideSpinner();
        this.cartItems = data as ICartItemGet[];
        this.cartItems.forEach((el: ICartItemGet) => {
          if(el.product) {
            el.product.image = CONFIG.SERVER + 'images/' + el.product.image
          }
        });
        
        this.totalPrice = Object.values(data as ICartItemGet[]).reduce((t, { amount, totalPrice }) => t + (amount * totalPrice), 0);
        this.totalPrice = Math.round((this.totalPrice + Number.EPSILON) * 100) / 100;
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();
        this.snackBar.open('We encountered an error while loading your cart.', 'Close', {
          duration: 3000
        });
      }
    });
  }

}
