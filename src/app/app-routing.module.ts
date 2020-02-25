import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { AllProfilesComponent } from './all-profiles/all-profiles.component';
import { AddCasComponent } from './add-cas/add-cas.component';
import { AllCasComponent } from './all-cas/all-cas.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path:'add-profile', canActivate:[AuthGuardService], component:AddProfileComponent},
  {path:'all-profiles',canActivate:[AuthGuardService], component: AllProfilesComponent},
  {path:'add_cas', canActivate:[AuthGuardService], component:AddCasComponent},
  {path:'all-cas',canActivate:[AuthGuardService], component:AllCasComponent},
  {path:'signin', component: SigninComponent},
  {path:'signup', component: SignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
