import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  title = 'registrationform';
  constructor() { }

  ngOnInit(): void {
  }

}
