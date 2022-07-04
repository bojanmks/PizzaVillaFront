import { Injectable } from '@angular/core';
import { IColumn } from '../interfaces/i-column';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseTableService {

  protected abstract columns: IColumn[];
  public hasPaginator: boolean = true;
  public dialog: any = null;

  getColumns(): IColumn[] {
    return this.columns;
  }

  constructor() { }

}
