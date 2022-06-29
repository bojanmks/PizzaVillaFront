import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { IErrorMessage } from 'src/app/shared/interfaces/i-error-message';
import { CartService } from 'src/app/shared/services/cart.service';
import { ICartItemGet } from '../../interfaces/i-cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input('item') item: ICartItemGet

  @Output('onChange') onChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  showDetails: boolean = false;

  constructor(
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  sendRequest(request: Observable<any>, errors: IErrorMessage[] = null): void {
    SpinnerFunctions.showSpinner();
    request.subscribe({
      next: () => {
        SpinnerFunctions.hideSpinner();
        this.onChange.emit(true);
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
