import { Component, OnInit } from '@angular/core';
import { ProductCategoriesService } from 'src/app/menu/menu/services/categories/product-categories.service';
import { ProductCategoriesDataService } from './services/data/product-categories-data.service';
import { ProductCategoriesTableService } from './services/table/product-categories-table.service';

@Component({
  selector: 'app-admin-product-categories',
  templateUrl: './admin-product-categories.component.html',
  styleUrls: ['./admin-product-categories.component.scss']
})
export class AdminProductCategoriesComponent implements OnInit {

  constructor(
    public apiService: ProductCategoriesService,
    public dataService: ProductCategoriesDataService,
    public tableService: ProductCategoriesTableService
  ) { }

  ngOnInit(): void {
  }

}
