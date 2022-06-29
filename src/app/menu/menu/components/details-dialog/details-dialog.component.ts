import { AfterContentChecked, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { CONFIG } from 'src/app/shared/constants/config';
import { ICartItemCreate } from 'src/app/cart/cart/interfaces/i-cart-item';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { IProduct } from '../../interfaces/i-product';
import { ProductsService } from '../../services/products/products.service';
import { AddonsService } from '../../services/addons/addons.service';
import { MultipleSelectComponent } from '../multiple-select/multiple-select.component';
import { IAddon } from '../../interfaces/i-addon';
import { FormControl } from '@angular/forms';
import { OrderService } from 'src/app/cart/cart/services/order.service';
import { IOrderConstants } from '../../interfaces/i-order-constants';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.scss']
})
export class DetailsDialogComponent implements OnInit, AfterViewInit, AfterContentChecked {

  @ViewChild('addons') addonsSelect: MultipleSelectComponent;

  orderConstants: IOrderConstants;
  product: IProduct;
  buttonIsDisabled: boolean = false;
  totalPrice: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productsService: ProductsService,
    public authService: AuthService,
    public cartService: CartService,
    private snackBar: MatSnackBar,
    public addonsService: AddonsService,
    public ordersService: OrderService,
    private cdref: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.ordersService.constants().subscribe({
      next: (data: IOrderConstants) => {
        this.orderConstants = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngAfterViewInit(): void {
    this.getProduct();
  }

  ngAfterContentChecked(): void {
    this.cdref.detectChanges();
  }

  getProduct(): void {
    SpinnerFunctions.showSpinner();
    this.productsService.get(this.data.id).subscribe({
      next: (data) => {
        SpinnerFunctions.hideSpinner();
        this.product = data;
        this.product.image = CONFIG.SERVER + 'images/' + this.product.image;
        this.totalPrice = this.product.price;
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();
        console.error(err);
      }
    });
  }

  updateTotalPrice(): void {
    this.totalPrice = this.product.price + this.addonsSelect.form.get('data').value.reduce((a: number, b: IAddon) => a + b.price, 0);
  }

  addToCart(): void {
    const addons: IAddon[] = this.addonsSelect.form.get('data').value;

    let item: ICartItemCreate = {
      productId: this.data.id,
      addonIds: addons ? addons.map((x: IAddon) => x.id) : []
    };

    SpinnerFunctions.showSpinner();
    this.buttonIsDisabled = true;
    this.cartService.create(item).subscribe({
      next: () => {
        SpinnerFunctions.hideSpinner();
        this.buttonIsDisabled = false;
        this.snackBar.open('Item was added to cart.', 'Close', {
          duration: 5000
        });
        this.cartService.notifySubscribers();
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();
        this.buttonIsDisabled = false;
        
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
