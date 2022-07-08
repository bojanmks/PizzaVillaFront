import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/admin/admin-layout/admin-layout/services/admin.service';
import { BaseAdminFormService } from 'src/app/shared/services/forms/base-admin-form.service';
import { UserRoles } from '../../enums/user-roles';
import { IUserCreate, IUserGet } from '../../interfaces/i-user';
import { UsersService } from '../api/users.service';
import { UsersDataService } from '../data/users-data.service';

@Injectable({
  providedIn: 'root'
})
export class UsersFormService extends BaseAdminFormService {

  constructor(
    apiService: UsersService,
    matDialog: MatDialog,
    private dataService: UsersDataService,
    private adminService: AdminService
  ) {
    super(apiService, matDialog);
  }

  public form: FormGroup = null;
  override originalObj: IUserGet;

  override initializeForm(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern(/^(?=[a-zA-Z0-9\._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\@\$\!\%\*\?\&\#])[A-Za-z\d\@\$\!\%\*\?\&]{8,}$/)]),
      role: new FormControl(UserRoles.Regular, Validators.required),
      isActive: new FormControl(true, Validators.required)
    });

    this.validateForm();
  }

  fillForm(user: IUserGet): void {
    this.form.get('username').setValue(user.username);
    this.form.get('email').setValue(user.email);
    this.form.get('isActive').setValue(user.isActive);

    if(this.adminService.isAdmin(user.useCaseIds)) {
      this.form.get('role').setValue(UserRoles.Admin);
    }
    else {
      this.form.get('role').setValue(UserRoles.Regular);
    }

    this.form.get('password').removeValidators([Validators.required]);
  }

  override submitInsert(): Observable<any> {
    return super.submitInsert(this.dataService);
  }

  override submitUpdate(id: number | string): Observable<any> {
    return super.submitUpdate(id, this.dataService);
  }

  override prepareDataToSend(): IUserCreate {
    let formValue = this.form.value;

    let useCaseIds: number[];

    switch(formValue.role) {
      case UserRoles.Admin:
        useCaseIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
        break;
      case UserRoles.Regular:
        useCaseIds = [37, 2, 44, 39, 41, 47, 9, 36, 1, 25, 24, 38, 23, 40];
        break;
    }

    return {
      username: formValue.username,
      email: formValue.email,
      useCaseIds: useCaseIds,
      isActive: formValue.isActive,
      password: formValue.password
    };
  }
  
}
