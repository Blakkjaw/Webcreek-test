import { Component} from '@angular/core';
import { Form, FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';
import { DynamicFieldComponent } from './comps/dynamic-field/dynamic-field.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb:FormBuilder){

  }
  title = 'Webcreek-test';
  countries = [
    {
      value: 1,
      label: 'United States of America'
    },
    {
      value: 2,
      label: 'United Kingdom'
    },
    {
      value: 3,
      label: 'Brazil'
    },
  ];
  registration!:FormGroup;
  fields = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      validators: [Validators.required],
      value: ''
    },
    {
      name: 'dob',
      label: 'Date of Birth',
      type: 'date',
      validators: [Validators.required],
      value: formatDate('2022-08-22', 'yyyy-MM-dd', 'en')
    },
    {
      name: 'email',
      label: 'E-Mail',
      type: 'text',
      validators: [],
      value: ''
    },
    {
      name: 'country',
      label: 'Country',
      type: 'combo',
      validators: [],
      options: this.countries,
      value: 1
    }
  ];
  ngOnInit(){
  this.registration = this.fb.group({});
  this.fields.forEach(field=>{
    this.registration.addControl(field.name,this.fb.control(field.value,field.validators))
  });
  }
  
  
 testFunc = ()=>{
  console.log(this.registration);
 }

}
