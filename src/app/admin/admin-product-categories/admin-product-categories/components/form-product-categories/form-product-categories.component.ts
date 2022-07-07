import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductCategoriesService } from 'src/app/menu/menu/services/categories/product-categories.service';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { ProductCategoriesDataService } from '../../services/data/product-categories-data.service';
import { ProductCategoriesFormService } from '../../services/forms/product-categories-form.service';

@Component({
  selector: 'app-form-product-categories',
  templateUrl: './form-product-categories.component.html',
  styleUrls: ['./form-product-categories.component.scss']
})
export class FormProductCategoriesComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formService: ProductCategoriesFormService,
    private apiService: ProductCategoriesService,
    public dataService: ProductCategoriesDataService
  ) { }

  isEdit: boolean = false;
  isFormReady: boolean = false;
  errorMessage: string = "";

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

          switch(err.status) {
            case 422:
              this.errorMessage = err.error.errors.map((x: any) => x.error).join('<br/>');
              break;
            default:
              this.errorMessage = "We encountered an error";
          }
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

          switch(err.status) {
            case 422:
              this.errorMessage = err.error.errors.map((x: any) => x.error).join('<br/>');
              break;
            default:
              this.errorMessage = "We encountered an error";
          }
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.formService.reset();
  }

}
