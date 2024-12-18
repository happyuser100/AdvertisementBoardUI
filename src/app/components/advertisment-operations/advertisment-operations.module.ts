import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertismentOperationsRoutingModule } from './advertisment-operations-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdvertismentListComponent } from './advertisment-list/advertisment-list.component';


@NgModule({
  declarations: [
    LayoutComponent,
    AdvertismentListComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdvertismentOperationsRoutingModule,
  ]
})
export class AdvertismentOperationsModule { }
