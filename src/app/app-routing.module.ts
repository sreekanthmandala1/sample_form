import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Below18ValidatorComponent } from './components/below18-validator/below18-validator.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { Sibling1Component } from './components/sibling1/sibling1.component';
import { Sibling2Component } from './components/sibling2/sibling2.component';
import { SevenDaysComponent } from './components/seven-days/seven-days.component';


const routes: Routes = [
  {path : 'form' , component: RegistrationFormComponent},
  {path : 'date' , component: Below18ValidatorComponent},
  {path : 'sibling1' , component: Sibling1Component},
  {path : 'sibling2' , component: Sibling2Component},
  {path : 'sevenDays' , component: SevenDaysComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
