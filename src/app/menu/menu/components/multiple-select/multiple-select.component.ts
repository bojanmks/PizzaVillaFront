import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { IAddon } from '../../interfaces/i-addon';

@Component({
  selector: 'app-multiple-select',
  templateUrl: './multiple-select.component.html',
  styleUrls: ['./multiple-select.component.scss']
})
export class MultipleSelectComponent implements OnInit, OnChanges {

  @Input('label') label: string;
  @Input('service') service: ApiService<any>;
  @Input('minLength') minLength: number;
  @Input('maxLength') maxLength: number;

  @Output('onChange') onChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  allData: any = [];
  filteredData: any = [];
  selectedItemsText: string = "";

  form: FormGroup = null;

  constructor() { }

  ngOnInit(): void {
    this.initializeForm();

    this.service.getAll().subscribe({
      next: (data) => {
        this.allData = data;
        this.filterData();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    const dataFormControl = new FormControl('');

    let validators: ValidatorFn[] = [];

    if(this.minLength) {
      validators.push(Validators.required);
      validators.push(Validators.minLength(this.minLength));
    }
    if(this.maxLength) {
      validators.push(Validators.maxLength(this.maxLength));
    }

    dataFormControl.addValidators(validators);

    this.form = new FormGroup({
      data: dataFormControl,
      dataFilter: new FormControl('')
    });

    this.form.markAllAsTouched();
  }

  filterData(): void {
    let search = this.form.get('dataFilter').value.toLowerCase();
    this.filteredData = this.allData.filter((x: any) => x.name.toLowerCase().includes(search));
  }

  updateSelectedItems(): void {
    this.selectedItemsText = this.form.get('data').value.map((x: any) => x.name).join(', ');
    this.onChange.emit(true);
  }

}
