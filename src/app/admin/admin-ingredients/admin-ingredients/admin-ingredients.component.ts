import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'src/app/menu/menu/services/ingredients/ingredients.service';
import { IngredientsDataService } from './services/data/ingredients-data.service';
import { IngredientsTableService } from './services/table/ingredients-table.service';

@Component({
  selector: 'app-admin-ingredients',
  templateUrl: './admin-ingredients.component.html',
  styleUrls: ['./admin-ingredients.component.scss']
})
export class AdminIngredientsComponent implements OnInit {

  constructor(
    public apiService: IngredientsService,
    public dataService: IngredientsDataService,
    public tableService: IngredientsTableService
  ) { }

  ngOnInit(): void {
  }

}
