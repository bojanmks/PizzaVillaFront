import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICartItemGet } from 'src/app/cart/cart/interfaces/i-cart-item';
import { IOrderGet } from 'src/app/cart/cart/interfaces/i-order';
import { OrderService } from 'src/app/cart/cart/services/order.service';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { ColumnType } from 'src/app/shared/enums/column-type';
import { IColumn } from 'src/app/shared/interfaces/i-column';

@Component({
  selector: 'app-order-details-dialog',
  templateUrl: './order-details-dialog.component.html',
  styleUrls: ['./order-details-dialog.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class OrderDetailsDialogComponent implements OnInit {

  order: IOrderGet
  dataSource: ICartItemGet[];
  columnsToDisplay: IColumn[] = [
    {
      index: 'totalPrice',
      label: 'Total Price',
      type: ColumnType.Currency
    },
    {
      index: 'product',
      label: 'Product',
      type: ColumnType.Product
    },
    {
      index: 'productPriceWhenOrdered',
      label: 'Product price when ordered',
      type: ColumnType.Currency
    },
    {
      index: 'amount',
      label: 'Amount',
      type: ColumnType.Amount
    }
  ];
  columnsToDisplayWithExpand: IColumn[] = [
    ...this.columnsToDisplay,
    {
      index: 'expand',
      label: 'Expand'
    }
  ];
  expandedElement: ICartItemGet;

  columnTypeEnum: typeof ColumnType = ColumnType;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private ordersService: OrderService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    SpinnerFunctions.showSpinner();
    this.ordersService.get(this.data.id).subscribe({
      next: (data) => {
        SpinnerFunctions.hideSpinner();
        this.order = data as IOrderGet;
        this.dataSource = this.order.items;
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();
        console.error(err);
        this.snackBar.open('We encountered an error.', 'Close', {
          duration: 3000
        });
      }
    });
  }

  getColumnsWithExpandIndexes(): string[] {
    return this.columnsToDisplayWithExpand.map((x: IColumn) => x.index);
  }

}
