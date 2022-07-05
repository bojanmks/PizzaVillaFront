import { Injectable } from '@angular/core';
import { ColumnType } from 'src/app/shared/enums/column-type';
import { IColumn } from 'src/app/shared/interfaces/i-column';
import { BaseTableService } from 'src/app/shared/services/base-table.service';
import { IUserGet } from '../../interfaces/i-user';

@Injectable({
  providedIn: 'root'
})
export class UsersTableService extends BaseTableService {

  constructor() {
    super();
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
      index: "isActive",
      label: "Is Active"
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
        console.log(el);
      }
    },
    {
      index: "delete",
      label: "Delete",
      type: ColumnType.WithButton,
      method: (el: IUserGet) => {
        console.log(el);
      }
    }
  ];
}
