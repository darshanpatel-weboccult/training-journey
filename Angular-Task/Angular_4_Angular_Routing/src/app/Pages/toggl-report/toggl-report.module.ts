import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TogglReportRoutingModule } from './toggl-report-routing.module';
import { TogglReportComponent } from './toggl-report.component';


@NgModule({
  declarations: [
    TogglReportComponent
  ],
  imports: [
    CommonModule,
    TogglReportRoutingModule
  ]
})
export class TogglReportModule { }
