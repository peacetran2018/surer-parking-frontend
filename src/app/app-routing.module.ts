import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurerMainComponent } from './components/surer-main/surer-main.component';
import { SurerMainLoginComponent } from './components/surer-main-login/surer-main-login.component';
import { AuthenticateGuard } from './shared/_helper/auth/authenticate.guard';
import { SurerParkingLotsComponent } from './components/surer-parking-lots/surer-parking-lots.component';
import { SurerProfileDetailsComponent } from './components/surer-profile-details/surer-profile-details.component';

const routes: Routes = [
  {
    path:"login",
    component: SurerMainLoginComponent
  },
  {
    path:"",
    component: SurerMainComponent,
    canActivate: [AuthenticateGuard],
    children:[
      {
        path:"parking",
        component: SurerParkingLotsComponent,
        canActivate: [AuthenticateGuard]
      },
      {
        path:"userprofile",
        component: SurerProfileDetailsComponent,
        canActivate:[AuthenticateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
