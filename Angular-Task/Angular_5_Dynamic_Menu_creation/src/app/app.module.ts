import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NodeService } from './node.service';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
