import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveManagementComponent } from './leave-management.component';
import { LeaveReportComponent } from './leave-report/leave-report.component';
import { LeavesComponent } from './leaves/leaves.component';

const routes: Routes = [
  {path:'', component:LeaveManagementComponent,children:[
    {path:'leaves', component:LeavesComponent},
    {path:'leave-report', component:LeaveReportComponent},
  ]},
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveManagementRoutingModule { }
