import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordManagementComponent } from './password-management.component';

const routes: Routes = [
  {path:'', component:PasswordManagementComponent, pathMatch:'full'},
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordManagementRoutingModule { }
