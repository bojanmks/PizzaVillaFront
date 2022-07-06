import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminIngredientsComponent } from './admin-ingredients/admin-ingredients.component';

const routes: Routes = [
  {
    path: "",
    component: AdminIngredientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminIngredientsRoutingModule { }
