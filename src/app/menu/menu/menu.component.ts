import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { forkJoin, Observable } from 'rxjs';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { CONFIG } from 'src/app/shared/constants/config';
import { IProduct, IProductGet } from './interfaces/i-product';
import { IProductCategory, IProductCategoryGet } from './interfaces/i-product-category';
import { ProductCategoriesService } from './services/categories/product-categories.service';
import { FilterFormService } from './services/form/filter-form.service';
import { ProductsService } from './services/products/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  products: IProductGet[] = [];
  productCategories: IProductCategoryGet[] = [];
  totalCount: number = 0;

  private updateTimer: ReturnType<typeof setTimeout> = null;

  productsPerPage: number = 8;

  constructor(
    private productsService: ProductsService,
    private productCategoriesService: ProductCategoriesService,
    public filterFormService: FilterFormService
  ) { }

  ngOnInit(): void {
    this.loadInitialData();
    this.filterFormService.initializeForm();
  }

  loadInitialData(): void {
    const requests: Observable<any>[] = [
      this.productsService.getAll(),
      this.productCategoriesService.getAll()
    ];

    SpinnerFunctions.showSpinner();
    forkJoin(requests).subscribe({
      next: (data: any) => {
        SpinnerFunctions.hideSpinner();
        this.products = data[0].data;
        this.products.forEach(p => {
          p.image = CONFIG.SERVER + 'images/' + p.image;
        });
        this.totalCount = data[0].totalCount;
        this.productCategories = data[1];
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();
        console.error(err);
      }
    });
  }

  loadProducts(page:number = 1): void {
    if(this.updateTimer !== null) {
      page = 1;
      clearTimeout(this.updateTimer);
      this.updateTimer = null;
    }

    SpinnerFunctions.showSpinner();
    this.productsService.getAll({
      keyword: this.filterFormService.form.get('keyword').value,
      page: page,
      perPage: this.productsPerPage,
      sortOrder: this.filterFormService.form.get('sortOrder').value,
      categoryIds: this.filterFormService.form.get('categories').value
    }).subscribe({
      next: (data: any) => {
        SpinnerFunctions.hideSpinner();
        this.products = data.data;
        this.products.forEach(p => {
          p.image = CONFIG.SERVER + 'images/' + p.image;
        });
        this.totalCount = data.totalCount;
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();
        console.error(err);
      }
    });
  }

  onCategoryChange(event: MatCheckboxChange): void {
    this.filterFormService.onCategoryCheckboxClick(event);
    this.prepareForUpdate();
  }

  prepareForUpdate(waitTime: number = 1500): void {
    clearTimeout(this.updateTimer);
    this.updateTimer = setTimeout(() => {
      this.loadProducts();
      this.updateTimer = null;
    }, waitTime);
  }

}
