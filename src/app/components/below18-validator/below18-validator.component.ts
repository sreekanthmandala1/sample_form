import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AgeValidator } from './age.validator';

@Component({
  selector: 'app-below18-validator',
  templateUrl: './below18-validator.component.html',
  styleUrls: ['./below18-validator.component.css']
})
export class Below18ValidatorComponent {
  lessThanEighteen: boolean = false;
  selectedDate: any;

  constructor(public fb: FormBuilder) { }

  validatorForm = this.fb.group({
    name: ['', [Validators.required, AgeValidator]],
  });

  get name() {
    return this.validatorForm.get('name');
  }

  onDateChange(e: any) {
    debugger
    this.selectedDate = e.target.value
    const birthdate = new Date(this.selectedDate);
    const today = new Date();
    const diff = today.getTime() - birthdate.getTime();
    const yearDiff = diff / (1000 * 60 * 60 * 24 * 365.25);
    if (yearDiff < 18) {
      this.lessThanEighteen = true
      return false;
    } else if (yearDiff > 18) {
      this.lessThanEighteen = false
    }
  }
}
