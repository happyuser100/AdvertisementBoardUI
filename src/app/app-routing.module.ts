import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAdvertismentComponent } from './components/main-advertisment/main-advertisment.component';

const routes: Routes = [
  {path: '', component: MainAdvertismentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
