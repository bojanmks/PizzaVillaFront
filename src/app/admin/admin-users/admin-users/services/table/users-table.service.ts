import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnType } from 'src/app/shared/enums/column-type';
import { IColumn } from 'src/app/shared/interfaces/i-column';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BaseTableService } from 'src/app/shared/services/base-table.service';
import { FormUsersComponent } from '../../components/form-users/form-users.component';
import { IUserGet } from '../../interfaces/i-user';

@Injectable({
  providedIn: 'root'
})
export class UsersTableService extends BaseTableService {

  constructor(
    private authService: AuthService,
    private matDialog: MatDialog
  ) {
    super();
  }

  override dialog = {
    component: FormUsersComponent,
    configuration: {
      width: "auto",
      height: "auto"
    }
  }

  override columns: IColumn[] = [
    {
      index: "id",
      label: "ID"
    },
    {
      index: "username",
      label: "Username"
    },
    {
      index: "email",
      label: "Email"
    },
    {
      index: "useCaseIds",
      label: "Role",
      type: ColumnType.UserRole
    },
    {
      index: "isActive",
      label: "Is Active",
      type: ColumnType.Boolean
    },
    {
      index: "createdAt",
      label: "Created At",
      type: ColumnType.Date
    },
    {
      index: "updatedAt",
      label: "UpdatedAt",
      type: ColumnType.Date
    },
    {
      index: "updatedBy",
      label: "Updated By"
    },
    {
      index: "edit",
      label: "Edit",
      type: ColumnType.WithButton,
      method: (el: IUserGet) => {
        this.matDialog.open(this.dialog.component, {
          data: el,
          width: this.dialog.configuration.width,
          height: this.dialog.configuration.height
        });
      }
    },
    {
      index: "delete",
      label: "Delete",
      type: ColumnType.Delete,
      disabled: (el: IUserGet): boolean => {
        return el.id === parseInt(this.authService.getUser().UserId);
      }
    }
  ];
}
