import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormProviderService } from 'src/services/form-provider.service';
import { TableProviderService } from 'src/services/table-provider.service';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.scss']
})
export class Level3Component {
  form:FormGroup;
  formProvider:FormProviderService;
  tableProvider: TableProviderService;
  router:Router;
  isValidating:boolean;

  constructor(private fp:FormProviderService, private tbs:TableProviderService, private _router:Router){
    this.formProvider = fp;
    this.form = fp.getForm();
    this.tableProvider = tbs;
    this.router = _router;
    this.isValidating = false;
  }

  handleSubmit(){
    this.isValidating = true;
    if(this.form.invalid){
      return;
    }
    this.tableProvider.updateRow(this.form.value);
    this.formProvider.resetForm()
    this.form.markAsUntouched();
    this.router.navigateByUrl("/level1");
  }
  
  handleCancel(){
    this.tableProvider.setEdit(null);
    this.formProvider.resetForm()
    this.form.markAsUntouched();
    this.router.navigateByUrl("/level1");
  }
}
