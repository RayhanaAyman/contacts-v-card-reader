import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { QrCodeModule } from 'ng-qrcode';

import { AppComponent } from './app.component';
import { ContactService } from './contact.service';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { AllcontactsComponent } from './allcontacts.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AllcontactsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    QrCodeModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/allContacts', pathMatch: 'full' },
      { path: 'allContacts', component: AllcontactsComponent },
      {path: 'viewContact/:id', component: ContactComponent},
    ]),
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
