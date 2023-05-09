import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Below18ValidatorComponent } from './components/below18-validator/below18-validator.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';


const routes: Routes = [
  {path : 'form' , component: RegistrationFormComponent},
  {path : 'date' , component: Below18ValidatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
