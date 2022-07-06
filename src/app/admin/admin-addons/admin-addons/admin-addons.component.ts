import { Component, OnInit } from '@angular/core';
import { AddonsService } from 'src/app/menu/menu/services/addons/addons.service';
import { AddonsDataService } from './services/data/addons-data.service';
import { AddonsTableService } from './services/table/addons-table.service';

@Component({
  selector: 'app-admin-addons',
  templateUrl: './admin-addons.component.html',
  styleUrls: ['./admin-addons.component.scss']
})
export class AdminAddonsComponent implements OnInit {

  constructor(
    public apiService: AddonsService,
    public dataService: AddonsDataService,
    public tableService: AddonsTableService
  ) { }

  ngOnInit(): void {
  }

}
