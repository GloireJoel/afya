import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { AllProfilesComponent } from './all-profiles/all-profiles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCasComponent } from './add-cas/add-cas.component';
import { AllCasComponent } from './all-cas/all-cas.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileService } from './services/profile.service';
import { AuthGuardService } from './services/auth-guard.service';
import { CasService } from './services/cas.service';


@NgModule({
  declarations: [
    AppComponent,
    AddProfileComponent,
    AllProfilesComponent,
    AddCasComponent,
    AllCasComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    AuthGuardService,
    CasService,
    ProfileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
