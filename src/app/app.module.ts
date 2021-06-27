//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';

//Components
import { AppComponent } from './app.component';
import { SurerMainComponent } from './components/surer-main/surer-main.component';
import { SurerMainLoginComponent } from './components/surer-main-login/surer-main-login.component';
import { SurerLoginComponent } from './components/surer-login/surer-login.component';
import { SurerSignupComponent } from './components/surer-signup/surer-signup.component';
import { SurerHeaderComponent } from './shared/components/surer-header/surer-header.component';
import { SurerProfileComponent } from './components/surer-profile/surer-profile.component';
import { SurerProfileDetailsComponent } from './components/surer-profile-details/surer-profile-details.component';

//Helpers
import { AuthenticateInterceptor } from './shared/_helper/auth/authenticate.Interceptor';

//Service
import { AuthenticateService } from './shared/services/authenticate/authenticate.service';
import { ParkingService } from './shared/services/parking/parking.service';
import { UserService } from './shared/services/user/user.service';
import { SurerParkingLotsComponent } from './components/surer-parking-lots/surer-parking-lots.component';

@NgModule({
  declarations: [
    AppComponent,
    SurerMainComponent,
    SurerMainLoginComponent,
    SurerLoginComponent,
    SurerSignupComponent,
    SurerHeaderComponent,
    SurerProfileComponent,
    SurerProfileDetailsComponent,
    SurerParkingLotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot()
  ],
  providers: [
    AuthenticateService,
    ParkingService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticateInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
