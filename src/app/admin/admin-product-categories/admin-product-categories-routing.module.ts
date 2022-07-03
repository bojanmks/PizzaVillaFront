import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductCategoriesComponent } from './admin-product-categories/admin-product-categories.component';

const routes: Routes = [
  {
    path: "",
    component: AdminProductCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminProductCategoriesRoutingModule { }
