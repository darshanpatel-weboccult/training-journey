import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TogglDashboardRoutingModule } from './toggl-dashboard-routing.module';
import { TogglDashboardComponent } from './toggl-dashboard.component';


@NgModule({
  declarations: [
    TogglDashboardComponent
  ],
  imports: [
    CommonModule,
    TogglDashboardRoutingModule
  ]
})
export class TogglDashboardModule { }
