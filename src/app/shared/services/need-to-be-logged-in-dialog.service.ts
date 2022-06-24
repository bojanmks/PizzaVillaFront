import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NeedToBeLoggedInDialogComponent } from '../components/need-to-be-logged-in-dialog/need-to-be-logged-in-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class NeedToBeLoggedInDialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  openDialog(): void {
    const dialog = this.dialog.open(NeedToBeLoggedInDialogComponent, {
      width: 'auto'
    });

    setTimeout(() => {
      dialog.close();
    }, 3000);
  }
}
