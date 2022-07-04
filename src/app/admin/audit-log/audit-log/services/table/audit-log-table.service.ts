import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnType } from 'src/app/shared/enums/column-type';
import { IColumn } from 'src/app/shared/interfaces/i-column';
import { BaseTableService } from 'src/app/shared/services/base-table.service';

@Injectable({
  providedIn: 'root'
})
export class AuditLogTableService extends BaseTableService {

  constructor() {
    super();
  }

  override columns: IColumn[] = [
    {
      index: "userId",
      label: "UserID"
    },
    {
      index: "identity",
      label: "Identity"
    },
    {
      index: "useCaseName",
      label: "Use Case"
    },
    {
      index: "executionDateTime",
      label: "Date",
      type: ColumnType.Date
    },
    {
      index: "isAuthorized",
      label: "Is Authorized"
    }
  ];

}