import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorizationsService } from 'src/app/services/authorizations.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  confirmNewPassword?:String;
  newPassword?:String;
  privacyCheckNgModel:boolean =false;

  registrationForm = new FormGroup({
    firstName : new FormControl(),
    lastName : new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNumber : new FormControl(),
    pharmacyName : new FormControl(),
    password: new FormControl('', [Validators.required, Validators.minLength(1)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(1)]),
    privacyCheck : new FormControl(),

  })

  get firstName(){
    return this.registrationForm.get('firstName')
  }
  get lastName(){
    return this.registrationForm.get('lastName')
  }
  get email(){
    return this.registrationForm.get('email')
  }
  get pharmacyName(){
    return this.registrationForm.get('mobileNumber')
  }
  get mobileNumber(){
    return this.registrationForm.get('pharmacyName')
  }
  get password(){
    return this.registrationForm.get('password')
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword')
  }
  get privacyCheck(){
    return this.registrationForm.get('privacyCheck')
  }

  constructor(private service:AuthorizationsService) { }

  ngOnInit(): void {
  }
  onRegister(){
    let data={
      
      name:this.firstName?.value +" " +this.lastName?.value,
      email:this.email?.value,
      mobileNumber:this.mobileNumber?.value,
      password:this.password?.value,
      pharmacy:this.pharmacyName?.value
     }
  
     this.service.register(data)
     .subscribe(res => {
          console.log(res);
     });
  }

}
