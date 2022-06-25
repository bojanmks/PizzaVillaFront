import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { CONFIG } from 'src/app/shared/constants/config';
import { ICartItemGet } from 'src/app/shared/interfaces/i-cart-item';
import { IErrorMessage } from 'src/app/shared/interfaces/i-error-message';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Amount', 'Price', 'Remove'];
  dataSource: ICartItemGet[];
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
        this.dataSource = data as ICartItemGet[];
        this.dataSource.forEach((el: ICartItemGet) => el.product.image = CONFIG.SERVER + 'images/' + el.product.image);
        
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

  sendRequest(request: Observable<any>, errors: IErrorMessage[] = null): void {
    SpinnerFunctions.showSpinner();
    request.subscribe({
      next: () => {
        SpinnerFunctions.hideSpinner();
        this.loadData();
        this.cartService.notifySubscribers();
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();

        const error = errors ? errors.find(x => x.statusCode === err.status) : null;
        const messageToDisplay = error ? error.message : 'We encountered an error.';
        
        this.snackBar.open(messageToDisplay, 'Close', {
          duration: 3000
        });
      }
    });
  }

  remove(id: number | string): void {
    this.sendRequest(this.cartService.delete(id));
  }

  increase(id: number | string): void {
    this.sendRequest(this.cartService.increase(id), [
      {
        statusCode: 422,
        message: "You can't have any more items in your cart."
      }
    ]);
  }

  decrease(id: number | string): void {
    this.sendRequest(this.cartService.decrease(id), [
      {
        statusCode: 422,
        message: "Amount can't be less than 1."
      }
    ]);
  }

}
