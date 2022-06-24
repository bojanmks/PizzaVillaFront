import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forkJoin, Observable } from 'rxjs';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { IIngredient } from '../../interfaces/i-ingredient';
import { IProduct } from '../../interfaces/i-product';
import { IProductCategory } from '../../interfaces/i-product-category';
import { ProductCategoriesService } from '../../services/categories/product-categories.service';
import { IngredientsService } from '../../services/ingredients/ingredients.service';
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
    private productsService: ProductsService,
    private ingredientsService: IngredientsService,
    private productCategoryService: ProductCategoriesService
    ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const requests: Observable<any>[] = [
      this.productsService.getAll(),
      this.ingredientsService.getAll(),
      this.productCategoryService.getAll()
    ];

    SpinnerFunctions.showSpinner();
    forkJoin(requests).subscribe({
      next: (data) => {
        SpinnerFunctions.hideSpinner();
        this.product = data[0].find((p: IProduct) => p.id === this.data.id);
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();
        console.error(err);
      }
    });
  }

}
