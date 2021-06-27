import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';
import { AuthenticateService } from 'src/app/shared/services/authenticate/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surer-profile',
  templateUrl: './surer-profile.component.html',
  styleUrls: ['./surer-profile.component.css']
})
export class SurerProfileComponent implements OnInit {
  userProfile = {
    email: "",
    firstname: "",
    lastname:""
  }
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.viewUserProfile();
  }

  viewUserProfile() {
    let email = localStorage.getItem("email")!;
    this.userService.getUserProfile(email).subscribe(x => {
      this.userProfile.email = x.email;
      this.userProfile.firstname = x.firstName;
      this.userProfile.lastname = x.lastName;
    });
  }

  goToUserProfileDetails(){
    this.router.navigate(["/userprofile"]);
  }
}
