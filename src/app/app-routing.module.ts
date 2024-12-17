import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAdvertismentComponent } from './components/main-advertisment/main-advertisment.component';
import { AdvertismentListComponent } from './components/advertisment-list/advertisment-list.component';

const routes: Routes = [
  {path: '', component: MainAdvertismentComponent},
  {path: 'list', component: AdvertismentListComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
