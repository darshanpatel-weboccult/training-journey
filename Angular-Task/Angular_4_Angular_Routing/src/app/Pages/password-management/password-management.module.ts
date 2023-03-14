import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordManagementRoutingModule } from './password-management-routing.module';
import { PasswordManagementComponent } from './password-management.component';


@NgModule({
  declarations: [
    PasswordManagementComponent
  ],
  imports: [
    CommonModule,
    PasswordManagementRoutingModule
  ]
})
export class PasswordManagementModule { }
