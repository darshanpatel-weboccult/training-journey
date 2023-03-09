import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormProviderService } from 'src/services/form-provider.service';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.scss'],
})
export class Level1Component {
  form: FormGroup;
  formProvider: FormProviderService;
  isValidating:boolean;
  router:Router;

  constructor(private fp: FormProviderService,private _router:Router) {
    this.formProvider = fp;
    this.form = fp.getForm();
    this.isValidating = false;
    this.router = _router;
  }

  handleNext() {
    this.isValidating = true;
    if(this.form.get('firstName')?.invalid || this.form.get('lastName')?.invalid || this.form.get('gender')?.invalid ){
      return;
    }
    this.router.navigateByUrl("/level2")
  }
}
