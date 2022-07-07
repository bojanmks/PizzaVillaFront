import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddonsService } from 'src/app/menu/menu/services/addons/addons.service';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { AddonsDataService } from '../../services/data/addons-data.service';
import { AddonsFormService } from '../../services/forms/addons-form.service';

@Component({
  selector: 'app-form-addons',
  templateUrl: './form-addons.component.html',
  styleUrls: ['./form-addons.component.scss']
})
export class FormAddonsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formService: AddonsFormService,
    private apiService: AddonsService,
    public dataService: AddonsDataService
  ) { }

  isEdit: boolean = false;
  isFormReady: boolean = false;

  ngOnInit(): void {
    this.isEdit = this.data && this.data.id;

    this.formService.initializeForm();

    if(this.isEdit) {
      this.getData();
    } else {
      this.isFormReady = true;
    }
  }

  getData(): void {
    const id = this.data.id;

    SpinnerFunctions.showSpinner();
    this.apiService.get(id).subscribe({
      next: (data: any) => {
        this.formService.originalObj = data;
        this.formService.fillForm(data);
        this.isFormReady = true;
        SpinnerFunctions.hideSpinner();
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();
        console.error(err);
      }
    })
  }

  save(): void {
    SpinnerFunctions.showSpinner();
    if(!this.isEdit) {
      this.formService.submitInsert().subscribe({
        next: (data) => {
          SpinnerFunctions.hideSpinner();
        },
        error: (err) => {
          SpinnerFunctions.hideSpinner();
          console.error(err);
        }
      });
    }
    else {
      this.formService.submitUpdate(this.data.id).subscribe({
        next: (data) => {
          SpinnerFunctions.hideSpinner();
        },
        error: (err) => {
          SpinnerFunctions.hideSpinner();
          console.error(err);
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.formService.reset();
  }

}
