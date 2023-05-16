import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Below18ValidatorComponent } from './components/below18-validator/below18-validator.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { Sibling1Component } from './components/sibling1/sibling1.component';
import { Sibling2Component } from './components/sibling2/sibling2.component';
import { SevenDaysComponent } from './components/seven-days/seven-days.component';
@NgModule({
  declarations: [
    AppComponent,
    Below18ValidatorComponent,
    RegistrationFormComponent,
    Sibling1Component,
    Sibling2Component,
    SevenDaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
