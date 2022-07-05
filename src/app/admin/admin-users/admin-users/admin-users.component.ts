import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/api/users.service';
import { UsersDataService } from './services/data/users-data.service';
import { UsersTableService } from './services/table/users-table.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  constructor(
    public apiService: UsersService,
    public dataService: UsersDataService,
    public tableService: UsersTableService
  ) { }

  ngOnInit(): void {
  }

}
