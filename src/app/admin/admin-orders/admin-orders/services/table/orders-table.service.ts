import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IOrderGet } from 'src/app/cart/cart/interfaces/i-order';
import { OrderService } from 'src/app/cart/cart/services/order.service';
import { ColumnType } from 'src/app/shared/enums/column-type';
import { IColumn } from 'src/app/shared/interfaces/i-column';
import { BaseTableService } from 'src/app/shared/services/base-table.service';
import { OrderDetailsDialogComponent } from '../../components/order-details-dialog/order-details-dialog.component';
import { OrdersDataService } from '../data/orders-data.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersTableService extends BaseTableService {

  constructor(
    private ordersService: OrderService,
    private ordersDataService: OrdersDataService,
    private snackBar: MatSnackBar,
    private matDialog: MatDialog
  ) {
    super();
  }

  override columns: IColumn[] = [
    {
      index: "id",
      label: "ID"
    },
    {
      index: "user",
      label: "User",
      type: ColumnType.User
    },
    {
      index: "totalPrice",
      label: "Total Price",
      type: ColumnType.Currency
    },
    {
      index: "createdAt",
      label: "Created At",
      type: ColumnType.Date
    },
    {
      index: "deliveredAt",
      label: "Delivered At",
      type: ColumnType.Date
    },
    {
      index: "markDelivered",
      label: "Mark Delivered",
      type: ColumnType.WithButton,
      method: (el: IOrderGet) => {
        this.ordersService.markDelivered(el.id).subscribe({
          next: (data) => {
            this.snackBar.open('Order was marked as delivered.', 'Close', {
              duration: 3000
            });
            this.ordersService.getAllAdmin().subscribe({
              next: (allData) => {
                this.ordersDataService.setStorage(allData);
              }
            });
          }
        });
      },
      disabled: (el: IOrderGet): boolean => {
        return el.deliveredAt !== null;
      }
    },
    {
      index: "details",
      label: "Details",
      type: ColumnType.WithButton,
      method: (el: IOrderGet) => {
        this.matDialog.open(OrderDetailsDialogComponent, {
          width: 'auto',
          data: {
            id: el.id
          }
        });
      }
    },
    {
      index: "cancel",
      label: "Cancel",
      type: ColumnType.Delete,
      disabled: (el: IOrderGet): boolean => {
        return el.deliveredAt !== null;
      }
    }
  ];
}
