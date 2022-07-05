import { Injectable } from '@angular/core';
import { IColumn } from 'src/app/shared/interfaces/i-column';
import { BaseTableService } from 'src/app/shared/services/base-table.service';

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
    }
  ];
}
