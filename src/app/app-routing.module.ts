import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { AllProfilesComponent } from './all-profiles/all-profiles.component';

const routes: Routes = [
  {path:'add-profile', component:AddProfileComponent},
  {path:'all-profiles', component: AllProfilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
