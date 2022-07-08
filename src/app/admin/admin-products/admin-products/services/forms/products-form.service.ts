import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IIngredientGet } from 'src/app/menu/menu/interfaces/i-ingredient';
import { IProductGetAdmin } from 'src/app/menu/menu/interfaces/i-product';
import { IProductCategoryGet } from 'src/app/menu/menu/interfaces/i-product-category';
import { ProductCategoriesService } from 'src/app/menu/menu/services/categories/product-categories.service';
import { IngredientsService } from 'src/app/menu/menu/services/ingredients/ingredients.service';
import { ProductsService } from 'src/app/menu/menu/services/products/products.service';
import { BaseAdminFormService } from 'src/app/shared/services/forms/base-admin-form.service';
import { ProductsDataService } from '../data/products-data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsFormService extends BaseAdminFormService {

  constructor(
    apiService: ProductsService,
    matDialog: MatDialog,
    private dataService: ProductsDataService,
    private ingredientsService: IngredientsService,
    private categoriesService: ProductCategoriesService,
    private snackBar: MatSnackBar
  ) {
    super(apiService, matDialog);
  }

  public form: FormGroup = null;
  override originalObj: IProductGetAdmin;

  allIngredients: IIngredientGet[] = [];
  filteredIngredients: IIngredientGet[] = [];
  ingredientsFilter: FormControl = new FormControl("");

  allCategories: IProductCategoryGet[] = [];
  filteredCategories: IProductCategoryGet[] = [];
  categoriesFilter: FormControl = new FormControl("");

  override initializeForm(): void {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      imageFile: new FormControl(null, Validators.required),
      categoryId: new FormControl('', Validators.required),
      ingredientIds: new FormControl([], [Validators.required, Validators.minLength(2)]),
      price: new FormControl(1, [Validators.required, Validators.min(1)]),
      isActive: new FormControl(true, Validators.required)
    });

    this.validateForm();
  }

  fillForm(product: IProductGetAdmin): void {
    this.form.get('name').setValue(product.name);
    this.form.get('price').setValue(product.price);
    this.form.get('isActive').setValue(product.isActive);
    this.form.get('ingredientIds').setValue(product.ingredients.map(x => x.id));
    this.form.get('categoryId').setValue(product.category.id);

    this.form.get('imageFile').removeValidators([Validators.required]);
  }

  override submitInsert(): Observable<any> {
    return super.submitInsert(this.dataService);
  }

  override submitUpdate(id: number | string): Observable<any> {
    return super.submitUpdate(id, this.dataService);
  }

  override prepareDataToSend(): FormData {
    let formData = new FormData();
    const formValue = this.form.value;

    formData.append('name', formValue.name);
    formData.append('price', formValue.price);
    formData.append('imageFile', formValue.imageFile);
    formData.append('isActive', formValue.isActive);
    formData.append('categoryId', formValue.categoryId);

    for(let i of formValue.ingredientIds) {
      formData.append('ingredientIds[]', i);
    }

    return formData;
  }

  loadAllIngredients(): void {
    this.ingredientsService.getAll().subscribe({
      next: (data) => {
        this.allIngredients = data as IIngredientGet[];
        this.filteredIngredients = this.allIngredients;
      },
      error: (err) => {
        console.error(err);
        this.snackBar.open('We encountered an error while loading ingredients', 'Close', {
          duration: 3000
        });
      }
    });
  }

  loadAllCategories(): void {
    this.categoriesService.getAll().subscribe({
      next: (data) => {
        this.allCategories = data as IProductCategoryGet[];
        this.filteredCategories = this.allCategories;
      },
      error: (err) => {
        console.error(err);
        this.snackBar.open('We encountered an error while loading product categories', 'Close', {
          duration: 3000
        });
      }
    });
  }

  filterIngredients(): void {
    let search = this.ingredientsFilter.value.toLowerCase();
    this.filteredIngredients = this.allIngredients.filter((x: IIngredientGet) => x.name.toLowerCase().includes(search));
  }

  filterCategories(): void {
    let search = this.categoriesFilter.value.toLowerCase();
    this.filteredCategories = this.allCategories.filter((x: IProductCategoryGet) => x.name.toLowerCase().includes(search));
  }

  onFileSelected(event: any): void {
    this.form.get('imageFile').setValue(event.target.files[0] ?? null);
  }
  
}
