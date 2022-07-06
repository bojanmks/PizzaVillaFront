import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddonsComponent } from './admin-addons/admin-addons.component';

const routes: Routes = [
  {
    path: "",
    component: AdminAddonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAddonsRoutingModule { }
