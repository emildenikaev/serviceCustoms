import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/header/main/main.component';
import { RegistrationComponent } from './components/header/registration/registration.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'registration', component: RegistrationComponent
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
