import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { SpinnerFunctions } from '../../classes/spinner-functions';
import { CONFIG } from '../../constants/config';
import { ColumnType } from '../../enums/column-type';
import { IBasePagedDateSearch } from '../../interfaces/i-base-search';
import { IColumn } from '../../interfaces/i-column';
import { IPagedResponse } from '../../interfaces/i-paged-response';
import { ApiService } from '../../services/api.service';
import { BaseDataService } from '../../services/base-data.service';
import { BaseTableService } from '../../services/base-table.service';
import { AreYouSureDialogComponent } from '../are-you-sure-dialog/are-you-sure-dialog.component';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit, OnDestroy {

  constructor(
    private matDialog: MatDialog,
    private snackBar: MatSnackBar
  ){}

  @Input() apiService: ApiService<any>;
  @Input() dataService: BaseDataService;
  @Input() tableService: BaseTableService;

  @Input('showAddButton') showAddButton: boolean = true;
  @Input('showDateInputs') showDateInputs: boolean = false;
  @Input('showKeywordInput') showKeywordInput: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<any>([]);

  readonly serverPath: string = CONFIG.SERVER;
  displayedColumns: any = [];
  allColumns: any = [];
  columnTypeEnum: typeof ColumnType = ColumnType;
  pagedResponse: IPagedResponse<any> = null;
  errorMessage: string = "";

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
        SpinnerFunctions.hideSpinner();
        console.error(data);
        this.snackBar.open('We encountered an error while loading the data.', 'Close', {
          duration: 3000
        });
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
        SpinnerFunctions.hideSpinner();
        console.error(data);
        this.snackBar.open('We encountered an error while loading the data.', 'Close', {
          duration: 3000
        });
      }
    });
  }

  onPageChange(event: PageEvent) {
    const search: IBasePagedDateSearch = {
      keyword: this.keyword.value,
      page: event.pageIndex + 1,
      perPage: event.pageSize,
      dateFrom: this.dateFrom.value ? new Date(this.dateFrom.value).toISOString() : '',
      dateTo: this.dateTo.value ? new Date(this.dateTo.value).toISOString() : ''
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
      dateFrom: this.dateFrom.value ? new Date(this.dateFrom.value).toISOString() : '',
      dateTo: this.dateTo.value ? new Date(this.dateTo.value).toISOString() : ''
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
    this.matDialog.open(AreYouSureDialogComponent).afterClosed().subscribe({
      next: (data: boolean) => {
        if(data) {
          SpinnerFunctions.showSpinner();
          this.apiService.delete(id).subscribe({
            next: (data) => {
              SpinnerFunctions.hideSpinner();
              this.getAll();
              this.errorMessage = "";
              this.snackBar.open('Successful deletion.', 'Close', {
                duration: 3000
              })
            },
            error: (err) => {
              SpinnerFunctions.hideSpinner();
              console.error(err);

              switch(err.status) {
                case 422:
                  this.errorMessage = err.error.errors.map((x: any) => x.error).join('<br/>');
                  break;
                default:
                  this.errorMessage = 'We encountered an error.'
              }
            }
          });
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}