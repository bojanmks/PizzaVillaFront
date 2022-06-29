import { AfterContentChecked, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICartItemCreate } from 'src/app/cart/cart/interfaces/i-cart-item';
import { OrderService } from 'src/app/cart/cart/services/order.service';
import { IAddon } from 'src/app/menu/menu/interfaces/i-addon';
import { IIngredient } from 'src/app/menu/menu/interfaces/i-ingredient';
import { IOrderConstants } from 'src/app/menu/menu/interfaces/i-order-constants';
import { AddonsService } from 'src/app/menu/menu/services/addons/addons.service';
import { IngredientsService } from 'src/app/menu/menu/services/ingredients/ingredients.service';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { MultipleSelectComponent } from '../../../multiple-select/multiple-select.component';

@Component({
  selector: 'app-custom-order-dialog',
  templateUrl: './custom-order-dialog.component.html',
  styleUrls: ['./custom-order-dialog.component.scss']
})
export class CustomOrderDialogComponent implements OnInit, AfterContentChecked {

  @ViewChild('ingredients') ingredientsSelect: MultipleSelectComponent;
  @ViewChild('addons') addonsSelect: MultipleSelectComponent;

  orderConstants: IOrderConstants;
  totalPrice: number = 0;

  ingredientsError: string = "";
  addonsError: string = "";

  constructor(
    public authService: AuthService,
    public ingredientsService: IngredientsService,
    public addonsService: AddonsService,
    private cartService: CartService,
    private ordersService: OrderService,
    private snackBar: MatSnackBar,
    private cdref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.ordersService.constants().subscribe({
      next: (data: IOrderConstants) => {
        this.orderConstants = data;
        this.totalPrice = data.CustomOrderPrice;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngAfterContentChecked(): void {
    this.cdref.detectChanges();
  }

  updateTotalPrice(): void {
    const ingredientsData: IIngredient[] = this.ingredientsSelect.form.get('data').value;
    const addonsData: IAddon[] = this.addonsSelect.form.get('data').value;

    if(ingredientsData && ingredientsData.length > this.orderConstants.MaxIngredients) {
      this.ingredientsError = `You can't select more than ${this.orderConstants.MaxIngredients} ingredients.`;
    }

    if(addonsData && addonsData.length > this.orderConstants.MaxAddons) {
      this.addonsError = `You can't select more than ${this.orderConstants.MaxAddons} addons.`
    }

    const ingredientsPrice: number = ingredientsData ? ingredientsData.reduce((a: number, b: IIngredient) => a + b.price, 0) : 0;
    const addonsPrice: number = addonsData ? addonsData.reduce((a: number, b: IAddon) => a + b.price, 0) : 0;

    this.totalPrice = this.orderConstants.CustomOrderPrice + ingredientsPrice + addonsPrice;
  }

  addToCart(): void {
    const ingredients: IAddon[] = this.ingredientsSelect.form.get('data').value;
    const addons: IAddon[] = this.addonsSelect.form.get('data').value;

    let item: ICartItemCreate = {
      ingredientIds: ingredients ? ingredients.map((x: IIngredient) => x.id) : [],
      addonIds: addons ? addons.map((x: IAddon) => x.id) : []
    };

    SpinnerFunctions.showSpinner();
    this.cartService.create(item).subscribe({
      next: () => {
        SpinnerFunctions.hideSpinner();
        this.snackBar.open('Item was added to cart.', 'Close', {
          duration: 5000
        });
        this.cartService.notifySubscribers();
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();
        
        let snackBarMessage: string = "";

        switch(err.status) {
          case 500:
            snackBarMessage = "We encountered an error.";
            break;
          case 422:
            snackBarMessage = "You can't have any more items in your cart.";
            break;
          default:
            snackBarMessage = "We encountered an error.";
        }

        this.snackBar.open(snackBarMessage, 'Close', {
          duration: 5000
        });
      }
    });
  }

}
