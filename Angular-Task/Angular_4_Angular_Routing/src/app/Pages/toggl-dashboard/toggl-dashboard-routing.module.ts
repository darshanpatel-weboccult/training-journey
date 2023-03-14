import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TogglDashboardComponent } from './toggl-dashboard.component';

const routes: Routes = [
  {path:'', component:TogglDashboardComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TogglDashboardRoutingModule { }
