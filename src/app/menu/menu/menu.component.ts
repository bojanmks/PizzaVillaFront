import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { forkJoin, Observable } from 'rxjs';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { IIngredient } from './interfaces/i-ingredient';
import { IProductDetailed } from './interfaces/i-product';
import { IProductCategory } from './interfaces/i-product-category';
import { IngredientsService } from './services/ingredients/ingredients.service';
import { ProductCategoriesService } from './services/categories/product-categories.service';
import { ProductsService } from './services/products/products.service';
import { FilterFormService } from './services/form/filter-form.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  products: IProductDetailed[] = [];
  productCategories: IProductCategory[] = [];

  private updateTimer: ReturnType<typeof setTimeout> = null;

  productsPerPage: number = 8;
  displayedProducts: IProductDetailed[] = [];

  constructor(
    private productsService: ProductsService,
    private ingredientsService: IngredientsService,
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
      this.ingredientsService.getAll(),
      this.productCategoriesService.getAll()
    ];

    SpinnerFunctions.showSpinner();
    forkJoin(requests).subscribe({
      next: (data: any) => {
        SpinnerFunctions.hideSpinner();
        data[0].sort((a: IProductDetailed, b: IProductDetailed) => a.name.localeCompare(b.name));
        data[0].forEach((p: IProductDetailed) => {
          p.ingredients = data[1].filter((i: IIngredient) => p.ingredients_ids.includes(i.id));
        });
        this.products = data[0];
        this.displayedProducts = this.products.slice(0, this.productsPerPage);
        data[2].sort((a: IProductCategory, b: IProductCategory) => a.name.localeCompare(b.name));
        this.productCategories = data[2];
        this.calculateProductAmountPerCategory();
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();
        console.error(err);
      }
    });
  }

  private calculateProductAmountPerCategory(): void {
    this.productCategories.forEach((c: IProductCategory) => {
      c.amount = this.products.filter((p: IProductDetailed) => p.category_id === c.id).length
    });
  }

  loadProducts(page:number = 1): void {
    if(this.updateTimer !== null) {
      page = 1;
      clearTimeout(this.updateTimer);
      this.updateTimer = null;
    }

    const requests: Observable<any>[] = [
      this.productsService.getAll(),
      this.ingredientsService.getAll()
    ];

    SpinnerFunctions.showSpinner();
    forkJoin(requests).subscribe({
      next: (data: any) => {
        SpinnerFunctions.hideSpinner();
        data[0].forEach((p: IProductDetailed) => {
          p.ingredients = data[1].filter((i: IIngredient) => p.ingredients_ids.includes(i.id));
        });
        this.products = data[0];

        this.filterByKeyword();
        this.applySortOrder();
        this.calculateProductAmountPerCategory();
        this.filterByCategory();
        
        this.displayedProducts = this.products.slice((page - 1) * this.productsPerPage, page * this.productsPerPage);
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();
        console.error(err);
      }
    });
  }

  private filterByKeyword(): void {
    const keyword = this.filterFormService.form.get('keyword').value;

    if(keyword !== '')
      this.products = this.products.filter((p: IProductDetailed) => p.name.toLowerCase().includes(keyword));
  }

  private filterByCategory(): void {
    const categories = this.filterFormService.form.get('categories').value;

    if(categories.length)
      this.products = this.products.filter((p: IProductDetailed) => categories.includes(p.category_id));
  }

  private applySortOrder(): void {
    const sortOrder = this.filterFormService.form.get('sortOrder').value;

    if(sortOrder) {
      switch(sortOrder) {
        case 'name-asc':
          this.products.sort((a: IProductDetailed, b: IProductDetailed) => a.name.localeCompare(b.name));
          break;
        case 'name-desc':
          this.products.sort((a: IProductDetailed, b: IProductDetailed) => b.name.localeCompare(a.name));
          break;
        case 'price-asc':
          this.products.sort((a: IProductDetailed, b: IProductDetailed) => {
            if(a.price > b.price)
              return 1;
            if(b.price > a.price)
              return -1;
            return 1;
          });
          break;
        case 'price-desc':
          this.products.sort((a: IProductDetailed, b: IProductDetailed) => {
            if(a.price > b.price)
              return -1;
            if(b.price > a.price)
              return 1;
            return 1;
          });
          break;
      }
    }
  }

  onCategoryCheckboxClick(event: MatCheckboxChange): void {
    const categoriesFormArray = this.filterFormService.form.get('categories') as FormArray;

    if(event.checked) {
      categoriesFormArray.push(new FormControl(event.source.value));
    } else {
      const index = categoriesFormArray.controls.findIndex(x => x.value === event.source.value);
      categoriesFormArray.removeAt(index);
    }

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
