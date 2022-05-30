import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges {

  @Input('totalElements') totalElements: number;
  @Input('elementsPerPage') elementsPerPage: number;

  @Output('pageChange') pageChange: EventEmitter<number> = new EventEmitter<number>();

  totalPages: number = 0;
  currentPage: number = 1;

  constructor() {
  }

  ngOnChanges(): void {
    this.totalPages = Math.ceil(this.totalElements / this.elementsPerPage);
    this.currentPage = 1;
  }

  changeToPage(page: number): void {
    if(this.currentPage === page)
      return;

    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }

  previousPage(): void {
    if(this.currentPage <= 1)
      return;
    
    this.pageChange.emit(--this.currentPage);
  }

  nextPage(): void {
    if(this.currentPage >= this.totalPages)
      return;
    
    this.pageChange.emit(++this.currentPage);
  }
}
