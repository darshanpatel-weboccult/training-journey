import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollRoutingModule } from './payroll-routing.module';
import { SalarySlipComponent } from './salary-slip/salary-slip.component';
import { PayrollComponent } from './payroll.component';


@NgModule({
  declarations: [
    SalarySlipComponent,
    PayrollComponent
  ],
  imports: [
    CommonModule,
    PayrollRoutingModule,
  ],
})
export class PayrollModule { }
