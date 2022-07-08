import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IProductCategoryCreate, IProductCategoryGetAdmin } from 'src/app/menu/menu/interfaces/i-product-category';
import { ProductCategoriesService } from 'src/app/menu/menu/services/categories/product-categories.service';
import { BaseAdminFormService } from 'src/app/shared/services/forms/base-admin-form.service';
import { ProductCategoriesDataService } from '../data/product-categories-data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesFormService extends BaseAdminFormService {

  constructor(
    apiService: ProductCategoriesService,
    matDialog: MatDialog,
    private dataService: ProductCategoriesDataService,
  ) {
    super(apiService, matDialog);
  }

  public form: FormGroup = null;
  override originalObj: IProductCategoryGetAdmin;

  override initializeForm(): void {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      isActive: new FormControl(true, Validators.required)
    });
    this.validateForm();
  }

  fillForm(category: IProductCategoryGetAdmin): void {
    this.form.get('name').setValue(category.name);
    this.form.get('isActive').setValue(category.isActive);
  }

  override submitInsert(): Observable<any> {
    return super.submitInsert(this.dataService);
  }

  override submitUpdate(id: number | string): Observable<any> {
    return super.submitUpdate(id, this.dataService);
  }

  override prepareDataToSend(): IProductCategoryCreate {
    let formValue = this.form.value;

    return {
      name: formValue.name,
      isActive: formValue.isActive
    };
  }

}
