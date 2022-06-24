import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { CONFIG } from 'src/app/shared/constants/config';
import { IProduct } from '../../interfaces/i-product';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.scss']
})
export class DetailsDialogComponent implements OnInit {

  product: IProduct;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productsService: ProductsService
    ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    SpinnerFunctions.showSpinner();
    this.productsService.get(this.data.id).subscribe({
      next: (data) => {
        SpinnerFunctions.hideSpinner();
        this.product = data;
        this.product.image = CONFIG.SERVER + 'images/' + this.product.image;
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();
        console.error(err);
      }
    });
  }

}
