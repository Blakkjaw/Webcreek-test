import { Component, Input} from '@angular/core';
import { Form, FormBuilder, Validators, FormControl, FormGroupDirective, FormGroup } from '@angular/forms';

@Component({
  selector: 'dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent{
  @Input() props: any;
  form!: FormGroup
  constructor(private rootFormGroup:FormGroupDirective) { 
    this.form = rootFormGroup.control;
  }

}
