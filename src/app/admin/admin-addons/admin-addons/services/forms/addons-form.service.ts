import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IAddonGetAdmin, IAddonCreate } from 'src/app/menu/menu/interfaces/i-addon';
import { AddonsService } from 'src/app/menu/menu/services/addons/addons.service';
import { BaseAdminFormService } from 'src/app/shared/services/forms/base-admin-form.service';
import { AddonsDataService } from '../data/addons-data.service';

@Injectable({
  providedIn: 'root'
})
export class AddonsFormService extends BaseAdminFormService {

  constructor(
    apiService: AddonsService,
    matDialog: MatDialog,
    private dataService: AddonsDataService,
  ) {
    super(apiService, matDialog);
  }

  public form: FormGroup = null;
  override originalObj: IAddonGetAdmin;

  override initializeForm(): void {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      isActive: new FormControl(true, Validators.required)
    });
    this.validateForm();
  }

  fillForm(addon: IAddonGetAdmin): void {
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

  override prepareDataToSend(): IAddonCreate {
    let formValue = this.form.value;

    return {
      name: formValue.name,
      price: formValue.price,
      isActive: formValue.isActive
    };
  }

}
