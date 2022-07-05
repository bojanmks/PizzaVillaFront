import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAreYouSureDialogData } from './interfaces/i-are-you-sure-dialog-data';

@Component({
  selector: 'app-are-you-sure-dialog',
  templateUrl: './are-you-sure-dialog.component.html',
  styleUrls: ['./are-you-sure-dialog.component.scss']
})
export class AreYouSureDialogComponent implements OnInit {

  title: string = "Confirm action";
  message: string = "Are you sure?";

  constructor(
    private dialogRef: MatDialogRef<AreYouSureDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAreYouSureDialogData
  ) { }

    ngOnInit(): void {
      if(this.data) {
        if(this.data.title) {
          this.title = this.data.title;
        }
        if(this.data.message) {
          this.message = this.data.message;
        }
      }
    }

  onDismiss(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

}
