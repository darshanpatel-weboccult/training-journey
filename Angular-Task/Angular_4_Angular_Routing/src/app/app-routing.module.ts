import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:''
  },
  {
    path: 'time-tracker',
    loadChildren: () =>
      import('./Pages/time-tracker/time-tracker.module').then(
        (module) => module.TimeTrackerModule
      ),
  },
  {
    path: 'company-policy',
    loadChildren: () =>
      import('./Pages/company-policy/company-policy.module').then(
        (module) => module.CompanyPolicyModule
      ),
  },
  {
    path: 'leave-management',
    loadChildren: () =>
      import('./Pages/leave-management/leave-management.module').then(
        (module) => module.LeaveManagementModule
      ),
  },
  {
    path: 'payroll',
    loadChildren: () =>
      import('./Pages/payroll/payroll.module').then(
        (module) => module.PayrollModule
      ),
  },
  {
    path: 'holiday-management',
    loadChildren: () =>
      import('./Pages/holiday-management/holiday-management.module').then(
        (module) => module.HolidayManagementModule
      ),
  },
  {
    path: 'password-management',
    loadChildren: () =>
      import('./Pages/password-management/password-management.module').then(
        (module) => module.PasswordManagementModule
      ),
  },
  {
    path: 'toggl-report',
    loadChildren: () =>
      import('./Pages/toggl-report/toggl-report.module').then(
        (module) => module.TogglReportModule
      ),
  },
  {
    path: 'toggl-dashboard',
    loadChildren: () =>
      import('./Pages/toggl-dashboard/toggl-dashboard.module').then(
        (module) => module.TogglDashboardModule
      ),
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
