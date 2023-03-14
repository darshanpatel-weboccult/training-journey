import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyPolicyComponent } from './company-policy.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:CompanyPolicyComponent},
  {path:'**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyPolicyRoutingModule { }
