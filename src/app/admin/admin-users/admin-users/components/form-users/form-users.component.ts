import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { UserRoles } from '../../enums/user-roles';
import { UsersService } from '../../services/api/users.service';
import { UsersDataService } from '../../services/data/users-data.service';
import { UsersFormService } from '../../services/forms/users-form.service';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.scss']
})
export class FormUsersComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formService: UsersFormService,
    private apiService: UsersService,
    public dataService: UsersDataService
  ) { }

  isEdit: boolean = false;
  isFormReady: boolean = false;
  errorMessage: string = "";

  userRolesEnum: typeof UserRoles = UserRoles;

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
