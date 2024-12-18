import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertismentListComponent } from './advertisment-list/advertisment-list.component';
import { LayoutComponent } from './layout/layout.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: AdvertismentListComponent },
      { path: 'add', component: AddEditComponent },
      { path: 'edit/:id', component: AddEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertismentOperationsRoutingModule { }
