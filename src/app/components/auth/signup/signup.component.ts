import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationsService } from 'src/app/services/authorizations.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

   confirmNewPassword?:String;
   newPassword?:String;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(1)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(1)])
  })

  get username(){
    return this.loginForm.get('username')
  }
  
  get password(){
    return this.loginForm.get('password')
  }
  get confirmPassword(){
    return this.loginForm.get('confirmPassword')
  }

  constructor(private service:AuthorizationsService ,private router: Router) { }

  ngOnInit(): void {
  }
  onSignUp(){
    let data={
     email:this.username?.value,
     password:this.password?.value
    }
 
    this.service.userSignUp(data)
    .subscribe(res => {
         console.log(res);
    });
   }
 
   navigateToLogin(){
     this.router.navigateByUrl('/login');
     }
}
