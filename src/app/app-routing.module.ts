import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversListComponent } from './components/drivers-list/drivers-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' }, 
  { path: 'list', component: DriversListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
