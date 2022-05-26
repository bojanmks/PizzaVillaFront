import { Component } from '@angular/core';
import { CustomTitleComponent } from 'src/app/shared/components/custom-title/custom-title.component';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent extends CustomTitleComponent {

  override pageTitle: string = "Author";

  constructor() {
    super();
  }

}
