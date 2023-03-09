import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardFormRoutingModule } from './wizard-form-routing.module';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
import { Level3Component } from './level3/level3.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Level1Component,
    Level2Component,
    Level3Component
  ],
  imports: [
    CommonModule,
    WizardFormRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    Level1Component,
    Level2Component,
    Level3Component
  ]
})
export class WizardFormModule { }
