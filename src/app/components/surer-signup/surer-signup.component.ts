import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms'
import Swal from 'sweetalert2'
import { AuthenticateService } from 'src/app/shared/services/authenticate/authenticate.service';

@Component({
  selector: 'app-surer-signup',
  templateUrl: './surer-signup.component.html',
  styleUrls: ['./surer-signup.component.css']
})
export class SurerSignupComponent implements OnInit {
  signupForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authenticateServivce: AuthenticateService) { 
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}$")]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phonenumber: ['']
    });
  }

  get fSignUp() { return this.signupForm.controls; }

  ngOnInit(): void {
    
  }

  onSignUp() {
    this.submitted = true;
    //when form is valid then stop here
    if (this.signupForm.invalid) {
      return;
    }
    this.loading = true;
    this.authenticateServivce.register(this.signupForm.value).subscribe(x =>{
      this.loading = false;
      this.submitted = false;
      if(x.success === true){
        this.signupForm.reset();
        Swal.fire({
          title:'Registration successful.',
          text: 'New user created!',
          icon: 'success',
          customClass:{
            confirmButton:'btn btn-primary'
          },
          buttonsStyling: false
        });
      }
      else{
        Swal.fire({
          title:'Registration failed.',
          text: 'Registration failed.',
          icon: 'error',
          customClass:{
            confirmButton:'btn btn-primary'
          },
          buttonsStyling: false
        });
      }      
      
    },(err) =>{
      let errors = "<ul class='list-group'>";
      err.error.errors.forEach((element:any) => {
        errors += "<li class='list-group-item list-group-item-danger'>" + element + "</li>";
      });
      errors += "</ul>"
      Swal.fire({
        title: 'Registration failed.',
        html: errors, 
        icon:'error',
        customClass:{
          confirmButton:'btn btn-primary'
        },
        buttonsStyling: false
      });
      this.loading = false;
    })
  }
}
