import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Below18ValidatorComponent } from './components/below18-validator/below18-validator.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
@NgModule({
  declarations: [
    AppComponent,
    Below18ValidatorComponent,
    RegistrationFormComponent
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
