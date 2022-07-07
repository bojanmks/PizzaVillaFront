import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IIngredientCreate, IIngredientGetAdmin } from 'src/app/menu/menu/interfaces/i-ingredient';
import { IngredientsService } from 'src/app/menu/menu/services/ingredients/ingredients.service';
import { BaseAdminFormService } from 'src/app/shared/services/forms/base-admin-form.service';
import { IngredientsDataService } from '../data/ingredients-data.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientsFormService extends BaseAdminFormService {

  constructor(
    apiService: IngredientsService,
    matDialog: MatDialog,
    private dataService: IngredientsDataService,
  ) {
    super(apiService, matDialog);
  }

  public form: FormGroup = null;
  override originalObj: IIngredientGetAdmin;

  override initializeForm(): void {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      price: new FormControl(0, Validators.required),
      isActive: new FormControl(true, Validators.required)
    });
    this.validateForm();
  }

  fillForm(addon: IIngredientGetAdmin): void {
    this.form.get('name').setValue(addon.name);
    this.form.get('price').setValue(addon.price);
    this.form.get('isActive').setValue(addon.isActive);
  }

  override submitInsert(): Observable<any> {
    return super.submitInsert(this.dataService);
  }

  override submitUpdate(id: number | string): Observable<any> {
    return super.submitUpdate(id, this.dataService);
  }

  override prepareDataToSend(): IIngredientCreate {
    let formValue = this.form.value;

    return {
      name: formValue.name,
      price: formValue.price,
      isActive: formValue.isActive
    };
  }
}
