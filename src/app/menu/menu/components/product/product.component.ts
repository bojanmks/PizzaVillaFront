import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IIngredient } from '../../interfaces/i-ingredient';
import { IProductGet } from '../../interfaces/i-product';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input('product') product: IProductGet;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  getProductIngerdientsAsString(id: number): string {
    const characterLimit = 50;
    let text = this.product.ingredients.map((i: IIngredient) => i.name).join(', ');

    if(text.length >= characterLimit)
      text = text.substring(0, characterLimit) + "...";

    return text;
  }

  openDialog(id: number): void {
    this.dialog.open(DetailsDialogComponent, {
      width: 'auto',
      data: { id }
    });
  }

}
