import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { TableRow } from './table-provider.service';

@Injectable({
  providedIn: 'root',
})
export class FormProviderService {
  private form: FormGroup;

  

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, this.emailValidation()]],
      contact: ['', [Validators.required,this.phoneValidation()]],
      dob: ['', [Validators.required, this.dobValidation()]],
      sport: ['', [Validators.required]],
      about: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(200)]],
      tnc: ['', [Validators.required]],
    });
  }

  getForm(): FormGroup {
    return this.form;
  }


  setForm(fields:TableRow){
    this.form.setValue(fields);
  }

  getField(fieldName: string) {
    return this.form.get(fieldName)?.value;
  }

  resetForm(){
    this.form.reset({
      firstName: '',
      lastName: '',
      gender:'',
      email: '',
      contact: '',
      dob: '',
      sport: '',
      about: '',
      tnc: ''
    })
  }

  emailValidation():ValidatorFn{
    return (control:AbstractControl) :ValidationErrors | null => {
      if(!control.value) return null;
      if(/^[a-z,1-9,\.]+@[a-z,1-9]+\.[a-z,1-9]+$/.test(control.value)){
        return null;
      }
      return {emailError: {value:"Please Enter a Valid Email"}};

    }
  }

  phoneValidation():ValidatorFn{
    return (control:AbstractControl) :ValidationErrors | null => {
      if(!control.value) return null;
      if(/^[1-9][0-9]{9}$/.test(control.value)){
        return null;
      }
      return {phoneError: {value:"Please Enter a Phone Number"}};

    }
  }
  dobValidation():ValidatorFn{
    return (control:AbstractControl) :ValidationErrors | null => {
      if(!control.value) return null;
      const age = new Date().getTime() - new Date(control.value).getTime();
      if(age <= 0){
        return {dobError: {value:"Please Select Date Before Today"}};
      }
      if (age >= 568025136000 && age <= 1893417120000) {
        return null;
      }
      return {dobError: {value:"Age Must Be Between 18 & 60"}};
    }
  }
}
