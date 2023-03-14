import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTrackerComponent } from './time-tracker.component';
import { TimeTrackerRoutingModule } from './time-tracker-routing.module';
import { TimeLogComponent } from './time-log/time-log.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import { ExtraStaffingComponent } from './extra-staffing/extra-staffing.component';



@NgModule({
  declarations: [
    TimeTrackerComponent,
    TimeLogComponent,
    TimeSheetComponent,
    ExtraStaffingComponent
  ],
  imports: [
    CommonModule,
    TimeTrackerRoutingModule
  ]
})
export class TimeTrackerModule { }
