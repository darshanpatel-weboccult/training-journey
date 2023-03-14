import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CompanyPolicyModule } from './Pages/company-policy/company-policy.module';
import { HolidayManagementModule } from './Pages/holiday-management/holiday-management.module';
import { LeaveManagementModule } from './Pages/leave-management/leave-management.module';
import { PayrollModule } from './Pages/payroll/payroll.module';
import { TimeTrackerModule } from './Pages/time-tracker/time-tracker.module';
import { TogglDashboardModule } from './Pages/toggl-dashboard/toggl-dashboard.module';
import { TogglReportModule } from './Pages/toggl-report/toggl-report.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyPolicyModule,
    HolidayManagementModule,
    PayrollModule,
    TimeTrackerModule,
    TogglDashboardModule,
    TogglReportModule,
    LeaveManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
