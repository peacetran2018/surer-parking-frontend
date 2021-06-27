import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-surer-profile-details',
  templateUrl: './surer-profile-details.component.html',
  styleUrls: ['./surer-profile-details.component.css']
})
export class SurerProfileDetailsComponent implements OnInit {
  userProfile = {
    email: "",
    firstname: "",
    lastname:"",
    phoneno: ""
  }
  loading = true;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.viewUserProfile();
  }

  viewUserProfile() {
    let email = localStorage.getItem("email")!;
    this.userService.getUserProfile(email).subscribe(x => {
      this.userProfile.email = x.email;
      this.userProfile.firstname = x.firstName;
      this.userProfile.lastname = x.lastName;
      this.userProfile.phoneno = x.phoneNumber;
      this.loading = false;
    },err=>{
      console.log(err);
      this.loading = false;
    });
  }

}
