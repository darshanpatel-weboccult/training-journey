import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormProviderService } from '../services/form-provider.service';
import { TableProviderService } from '../services/table-provider.service';
import { WizardFormModule } from './wizard-form/wizard-form.module';
import { DataTableModule } from './data-table/data-table.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WizardFormModule,
    DataTableModule
  ],
  providers: [FormProviderService, TableProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
