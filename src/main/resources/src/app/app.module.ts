import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { HomeDescriptionComponent } from './home-description.component';
import { FooComponent } from './foo.component';
import { ViewPatientsComponent } from './view-patients.component';
import { AddPatientComponent } from './add-patient.component';
import { FindPatientComponent } from './find-patient.component';
import { ViewCryptoComponent } from './view-crypto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDescriptionComponent,
    LoginComponent,
    FooComponent,
    ViewPatientsComponent,
    AddPatientComponent,
    FindPatientComponent,
    ViewCryptoComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
     { path: '', component: HomeDescriptionComponent },
     { path: 'login', component: LoginComponent },
     { path: 'viewpatients', component: ViewPatientsComponent },
     { path: 'addpatient', component: AddPatientComponent },
     { path: 'findpatient', component: FindPatientComponent },
     { path: 'viewcrypto', component: ViewCryptoComponent },
     { path: 'foo', component: FooComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
