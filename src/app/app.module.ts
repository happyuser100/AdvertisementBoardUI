import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAdvertismentComponent } from './components/main-advertisment/main-advertisment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvertismentListComponent } from './components/advertisment-list/advertisment-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MainAdvertismentComponent,
    AdvertismentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
