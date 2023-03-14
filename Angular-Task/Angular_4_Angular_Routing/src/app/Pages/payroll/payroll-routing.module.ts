import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayrollComponent } from './payroll.component';
import { SalarySlipComponent } from './salary-slip/salary-slip.component';

const routes: Routes = [
  {
    path: '',
    component: PayrollComponent,
    children: [{ path: 'salary-slip', component: SalarySlipComponent }],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayrollRoutingModule {}
