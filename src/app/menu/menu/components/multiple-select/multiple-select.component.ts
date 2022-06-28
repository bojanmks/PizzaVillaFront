import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { IAddon } from '../../interfaces/i-addon';
import { MultipleSelectFormService } from './services/forms/multiple-select-form.service';

@Component({
  selector: 'app-multiple-select',
  templateUrl: './multiple-select.component.html',
  styleUrls: ['./multiple-select.component.scss']
})
export class MultipleSelectComponent implements OnInit {

  @Input('label') label: string;
  @Input('service') service: ApiService<any>;

  @Output('onChange') onChange: EventEmitter<number> = new EventEmitter<number>();

  allData: any = [];
  filteredData: any = [];
  selectedItemsText: string = "";

  constructor(
    public multipleSelectFormService: MultipleSelectFormService
  ) { }

  ngOnInit(): void {
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

  filterData(): void {
    let search = this.multipleSelectFormService.form.get('dataFilter').value.toLowerCase();
    this.filteredData = this.allData.filter((x: any) => x.name.toLowerCase().includes(search));
  }

  updateSelectedItems(): void {
    this.selectedItemsText = this.multipleSelectFormService.form.get('data').value.map((x: any) => x.name).join(', ');

    const totalPrice: number = this.multipleSelectFormService.form.get('data').value.reduce((a: number, b: IAddon) => a + b.price, 0);
    this.onChange.emit(totalPrice);
  }

}
