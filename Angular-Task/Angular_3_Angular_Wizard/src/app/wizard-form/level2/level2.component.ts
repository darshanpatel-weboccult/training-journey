import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormProviderService } from 'src/services/form-provider.service';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss']
})
export class Level2Component {

  form:FormGroup;
  formProvider:FormProviderService;
  isValidating:boolean;
  router:Router;

  constructor(private fp:FormProviderService, private _router:Router){
    this.formProvider = fp;
    this.form = fp.getForm();
    this.isValidating = false;
    this.router = _router;
  }

  handleNext() {
    this.isValidating = true;
    if(this.form.get('email')?.invalid || this.form.get('contact')?.invalid || this.form.get('dob')?.invalid ){
      return;
    }
    this.router.navigateByUrl("/level3")
  }
}
