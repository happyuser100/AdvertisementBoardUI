import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAdvertismentComponent } from './components/main-advertisment/main-advertisment.component';
import { LayoutComponent } from './components/advertisment-operations/layout/layout.component';

const routes: Routes = [
  {path: '', component: MainAdvertismentComponent},
  {path: 'list', loadChildren: () => import('./components/advertisment-operations/advertisment-operations.module').then(m => m.AdvertismentOperationsModule),},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
