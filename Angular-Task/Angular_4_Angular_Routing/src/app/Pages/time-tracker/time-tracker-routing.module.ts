import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtraStaffingComponent } from './extra-staffing/extra-staffing.component';
import { TimeLogComponent } from './time-log/time-log.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import { TimeTrackerComponent } from './time-tracker.component';

const routes: Routes = [
  {
    path: '',
    component: TimeTrackerComponent,
    children:[
        {path:'time-log', component:TimeLogComponent},
        {path:'time-sheet', component:TimeSheetComponent},
        {path:'extra-staffing', component:ExtraStaffingComponent},
    ]
  },
  {
    path:"**",
    pathMatch:'full',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeTrackerRoutingModule {}
