import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact.component';
import { AllcontactsComponent } from './allcontacts.component';


const routes: Routes = [
  { path: 'allContacts', component: AllcontactsComponent },
  { path: 'viewContact/:id', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
