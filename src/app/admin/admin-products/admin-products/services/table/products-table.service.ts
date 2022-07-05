import { Injectable } from '@angular/core';
import { IProductGetAdmin } from 'src/app/menu/menu/interfaces/i-product';
import { ColumnType } from 'src/app/shared/enums/column-type';
import { IColumn } from 'src/app/shared/interfaces/i-column';
import { BaseTableService } from 'src/app/shared/services/base-table.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsTableService extends BaseTableService {

  constructor() {
    super();
  }

  override columns: IColumn[] = [
    {
      index: "id",
      label: "ID"
    },
    {
      index: "name",
      label: "Name"
    },
    {
      index: "image",
      label: "Image",
      type: ColumnType.ServerImage
    },
    {
      index: "price",
      label: "Price",
      type: ColumnType.Currency
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
      method: (el: IProductGetAdmin) => {
        console.log(el);
      }
    },
    {
      index: "delete",
      label: "Delete",
      type: ColumnType.Delete
    }
  ];
}
