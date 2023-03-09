import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes = [
    {path:'', loadChildren: () => import('./wizard-form/wizard-form.module').then(m => m.WizardFormModule), pathMatch:'full'},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}