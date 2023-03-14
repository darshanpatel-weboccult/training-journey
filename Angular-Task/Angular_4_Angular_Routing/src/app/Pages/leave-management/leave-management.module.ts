import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveManagementRoutingModule } from './leave-management-routing.module';
import { LeaveManagementComponent } from './leave-management.component';
import { LeavesComponent } from './leaves/leaves.component';
import { LeaveReportComponent } from './leave-report/leave-report.component';


@NgModule({
  declarations: [
    LeaveManagementComponent,
    LeavesComponent,
    LeaveReportComponent
  ],
  imports: [
    CommonModule,
    LeaveManagementRoutingModule
  ]
})
export class LeaveManagementModule { }
