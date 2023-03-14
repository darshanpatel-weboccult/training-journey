import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TogglReportComponent } from './toggl-report.component';

const routes: Routes = [
  {path:'', component:TogglReportComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TogglReportRoutingModule { }
