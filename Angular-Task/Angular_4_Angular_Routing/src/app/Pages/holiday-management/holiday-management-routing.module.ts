import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayManagementComponent } from './holiday-management.component';

const routes: Routes = [
  {path:'', component:HolidayManagementComponent, pathMatch:'full'},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayManagementRoutingModule { }
