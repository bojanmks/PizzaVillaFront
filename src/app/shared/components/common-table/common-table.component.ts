import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { SpinnerFunctions } from '../../classes/spinner-functions';
import { ColumnType } from '../../enums/column-type';
import { IBasePagedDateSearch } from '../../interfaces/i-base-search';
import { IColumn } from '../../interfaces/i-column';
import { IPagedResponse } from '../../interfaces/i-paged-response';
import { ApiService } from '../../services/api.service';
import { BaseDataService } from '../../services/base-data.service';
import { BaseTableService } from '../../services/base-table.service';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit, OnDestroy {

  constructor(
    private matDialog: MatDialog
  ){}

  @Input() apiService: ApiService<any>;
  @Input() dataService: BaseDataService;
  @Input() tableService: BaseTableService;

  @Input('showAddButton') showAddButton: boolean = true;
  @Input('showDateInputs') showDateInputs: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<any>([]);

  displayedColumns: any = [];
  allColumns: any = [];
  columnTypeEnum: typeof ColumnType = ColumnType;
  pagedResponse: IPagedResponse<any> = null;

  dateFrom: FormControl = new FormControl(null);
  dateTo: FormControl = new FormControl(null);
  keyword: FormControl = new FormControl('');

  private subscription: Subscription = new Subscription();

  private updateTimer: ReturnType<typeof setTimeout> = null;

  ngAfterViewInit(): void {
    if(this.tableService.hasPaginator && !this.dataService.isPagedResponse)
      this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.allColumns = this.tableService.getColumns();
    this.displayedColumns = this.allColumns.map((x: any) => x.index);
    this.trackStorageChange();

    this.getAll();
  }

  getAll(): void {
    SpinnerFunctions.showSpinner();
    this.apiService.getAllAdmin().subscribe({
      next: (data: any) => {
        this.dataService.setStorage(data);
        SpinnerFunctions.hideSpinner();
      },
      error: (data: any) => {
        console.error(data);
        SpinnerFunctions.hideSpinner();
      }
    });
  }

  trackStorageChange(): void {
    this.subscription.add(this.dataService.getStorage().subscribe({
      next: (data: any) => {
        if(this.dataService.isPagedResponse) {
          this.pagedResponse = data as IPagedResponse<any>;
          this.dataSource.data = this.pagedResponse.data;
        }
        else {
          this.dataSource.data = data;
        }
      }
    }));
  }

  private sendRequestWithSearch(search: IBasePagedDateSearch, resetPage: boolean = false) {
    SpinnerFunctions.showSpinner();
    this.apiService.getAllAdminPaged(search).subscribe({
      next: (data: any) => {
        if(resetPage) {
          this.paginator.firstPage();
        }
        
        this.dataService.setStorage(data);
        SpinnerFunctions.hideSpinner();
      },
      error: (data: any) => {
        console.error(data);
        SpinnerFunctions.hideSpinner();
      }
    });
  }

  onPageChange(event: PageEvent) {
    const search: IBasePagedDateSearch = {
      keyword: this.keyword.value,
      page: event.pageIndex + 1,
      perPage: event.pageSize,
      dateFrom: this.dateFrom.value,
      dateTo: this.dateTo.value
    }

    this.sendRequestWithSearch(search);
  }

  prepareForUpdate(): void {
    clearTimeout(this.updateTimer);
    this.updateTimer = setTimeout(() => {
      if(this.dataService.isPagedResponse) {
        this.applyFilterServer();
      }
    }, 2000);
  }

  private applyFilterServer(): void {
    const search: IBasePagedDateSearch = {
      keyword: this.keyword.value,
      page: this.paginator.pageIndex + 1,
      perPage: this.paginator.pageSize,
      dateFrom: this.dateFrom.value,
      dateTo: this.dateTo.value
    }

    this.sendRequestWithSearch(search, true);
  }

  clickOnFieldWithButton(element: any, column: IColumn) {
    column.method(element);
  }

  add(): void {
    this.matDialog.open(this.tableService.dialog.component, {
      width: this.tableService.dialog.configuration.width,
      height: this.tableService.dialog.configuration.height
    });
  }

  delete(id: number | string): void {
    this.apiService.delete(id).subscribe({
      next: (data) => {
        this.getAll();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}