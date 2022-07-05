import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/menu/menu/services/products/products.service';
import { ProductsDataService } from './services/data/products-data.service';
import { ProductsTableService } from './services/table/products-table.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  constructor(
    public apiService: ProductsService,
    public dataService: ProductsDataService,
    public tableService: ProductsTableService
  ) { }

  ngOnInit(): void {
  }

}
