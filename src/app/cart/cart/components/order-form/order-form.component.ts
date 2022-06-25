import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { CartService } from 'src/app/shared/services/cart.service';
import { OrderFormService } from '../../services/forms/order-form.service';
import { OrderSuccessfullyCreatedDialogComponent } from '../order-successfully-created-dialog/order-successfully-created-dialog.component';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  @Input('totalPrice') totalPrice: number = 0;
  @Input('hasItems') hasItems: boolean = false;

  @Output('onOrderPlaced') onOrderPlaced: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public orderFormService: OrderFormService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.orderFormService.initializeForm();
  }

  submit(): void {
    SpinnerFunctions.showSpinner();
    this.orderFormService.submitForm().subscribe({
      next: (data) => {
        SpinnerFunctions.hideSpinner();
        this.orderFormService.initializeForm();
        this.onOrderPlaced.emit(true);

        this.cartService.notifySubscribers();

        const dialog = this.dialog.open(OrderSuccessfullyCreatedDialogComponent, {
          width: 'auto'
        });

        setTimeout(() => {
          dialog.close();
        }, 3000);
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();
        this.orderFormService.buttonIsDisabled = false;

        let message: string = "";
        switch(err.status) {
          case 422:
            message = err.error.errors.map((x: any) => x.error).join('; ');
            break;
          default:
            message = "We encountered an error.";
        }

        this.snackBar.open(message, 'Close', {
          duration: 3000
        });
      }
    });
  }

}
