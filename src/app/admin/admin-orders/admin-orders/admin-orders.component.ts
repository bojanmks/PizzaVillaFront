import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/cart/cart/services/order.service';
import { OrdersDataService } from './services/data/orders-data.service';
import { OrdersTableService } from './services/table/orders-table.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {

  constructor(
    public apiService: OrderService,
    public dataService: OrdersDataService,
    public tableService: OrdersTableService
  ) { }

  ngOnInit(): void {
  }

}
