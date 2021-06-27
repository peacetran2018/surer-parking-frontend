import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { AuthenticateService } from 'src/app/shared/services/authenticate/authenticate.service';
import { NgIfContext } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-surer-login',
  templateUrl: './surer-login.component.html',
  styleUrls: ['./surer-login.component.css']
})
export class SurerLoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  returnUrl:string = "";
  constructor(private formBuilder: FormBuilder, private authenService: AuthenticateService, private router: Router, private activeRoute: ActivatedRoute) { 
    this.loginForm = this.formBuilder.group({
      useremail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  get fLogin() { return this.loginForm.controls; }

  ngOnInit(): void {
    // get return url from route parameters or default to '/parking'
    this.returnUrl = this.activeRoute.snapshot.queryParams['returnUrl'] || '/parking';
  }

  onLogin() {
    this.submitted = true;
    this.loading = true;
    if (this.loginForm.invalid) {
      return;
    }   

    this.authenService.login(this.loginForm.value).pipe(first())
    .subscribe(response => {
      this.submitted = false;
      this.loading = false;
      if(response.success){
        localStorage.setItem('jwttoken', response.token);
        localStorage.setItem('email', this.fLogin.useremail.value);
        this.router.navigate([this.returnUrl]);
      }
    },err =>{
      if (err.status == 400)
          Swal.fire({
            title:'Authentication failed.',
            text: 'Incorrect username or password.',
            icon: 'error',
            customClass:{
              confirmButton:'btn btn-primary'
            },
            buttonsStyling: false
          });
        else
          console.log(err);      
    });
  }
}
