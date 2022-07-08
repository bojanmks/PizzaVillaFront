import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from 'src/app/menu/menu/services/products/products.service';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { ProductsDataService } from '../../services/data/products-data.service';
import { ProductsFormService } from '../../services/forms/products-form.service';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.scss']
})
export class FormProductsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formService: ProductsFormService,
    private apiService: ProductsService,
    public dataService: ProductsDataService
  ) { }

  isEdit: boolean = false;
  isFormReady: boolean = false;
  errorMessage: string = "";

  ngOnInit(): void {
    this.isEdit = this.data && this.data.id;
    
    this.formService.initializeForm();
    this.formService.loadAllIngredients();
    this.formService.loadAllCategories();

    if(this.isEdit) {
      this.getData();
    } else {
      this.isFormReady = true;
    }
  }

  getData(): void {
    const id = this.data.id;

    SpinnerFunctions.showSpinner();
    this.apiService.getAdmin(id).subscribe({
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
              if(err.error.errors) {
                this.errorMessage = err.error.errors.map((x: any) => x.error).join('<br/>');
              } 
              else {
                this.errorMessage = err.error.message;
              }
              
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
              if(err.error.errors) {
                this.errorMessage = err.error.errors.map((x: any) => x.error).join('<br/>');
              } 
              else {
                this.errorMessage = err.error.message;
              }  
            
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
