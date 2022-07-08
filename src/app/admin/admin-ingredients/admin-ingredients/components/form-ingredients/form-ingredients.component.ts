import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IngredientsService } from 'src/app/menu/menu/services/ingredients/ingredients.service';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { IngredientsDataService } from '../../services/data/ingredients-data.service';
import { IngredientsFormService } from '../../services/forms/ingredients-form.service';

@Component({
  selector: 'app-form-ingredients',
  templateUrl: './form-ingredients.component.html',
  styleUrls: ['./form-ingredients.component.scss']
})
export class FormIngredientsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formService: IngredientsFormService,
    private apiService: IngredientsService,
    public dataService: IngredientsDataService
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
