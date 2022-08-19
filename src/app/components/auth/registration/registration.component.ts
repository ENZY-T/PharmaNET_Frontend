import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationsService } from 'src/app/services/authorizations.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  selectedValue: String = 'val1';

  loadingTitle:String="Loading...";
  isBlock:boolean =false;

  isShowToast:boolean =false;
  toastContent:string="";
  isToastTypeSuccess:boolean =true ;
  
  confirmNewPassword?:String;
  newPassword?:String;
  privacyCheckNgModel:boolean =false;
  isFirstSideFast:boolean =false;
  isSecondSideFast:boolean =false;
  role?:String;
  registrationForm = new FormGroup({

    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNumber : new FormControl(),
    pharmacyName : new FormControl(),
    password: new FormControl('', [Validators.required, Validators.minLength(1)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(1)]),
    privacyCheck : new FormControl(),
    pharmacyRegisterationNumber : new FormControl(),

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
  get pharmacyRegisterationNumber(){
    return this.registrationForm.get('pharmacyRegisterationNumber')
  }

  constructor(private service:AuthorizationsService,private router: Router) { }

  ngOnInit(): void {
    
  }
  onChange(e:any){
    console.log(this.selectedValue);
  }
 async onCustomerRegister(){
    console.log("on reg customer");
    this.isBlock=true;
    this.role ='customer';
    let data={
      FName:this.firstName?.value ,
      LName: this.lastName?.value,
      Email :this.email?.value,
      Password :this.password?.value,
      confirmPassword :this.confirmPassword?.value,
      role:this.role
     }
  
     this.service.customerRegister(data)
     .subscribe(
      (val) => {
          console.log("POST call successful value returned in body", val);
          this.onRegisterSuccess();

      },
      response => {
        this.toastFunction("Customer registered Faild",false);
       
          console.log("POST call in error", response);
          this.isBlock=false;
      },
      () => {
          console.log("The POST observable is now completed.");
      });

     
  }
  async onRegisterSuccess(){
    this.toastFunction("Customer registered successfully",true);
    this.isBlock=false;
    await this.delay(2000);
    this.router.navigateByUrl('/customerView');
  }
  
   onPharmacyRegister(){
    this.toastFunction("Pharmacy registered successfully",true);

    let data={
      FName:this.firstName?.value ,
      LName: this.lastName?.value,
      Email :this.email?.value,
      Password :this.password?.value,
      mobileNumber:this.mobileNumber?.value,
      pharmacy:this.pharmacyName?.value,
      pharmacyRegisterationNumber:this.pharmacyRegisterationNumber?.value

     }
  
     this.service.pharmacyRegister(data)
     .subscribe(res => {
          console.log(res);
     });

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
          console.log(res.st);
     });
  }
  onNavigateFirstSide(){
    this.isFirstSideFast = false;
  }
  onNavigateSecondSide(){
    this.isFirstSideFast = true;
    this.isSecondSideFast = false;
  }
  onNavigateThirdSide(){
    
    this.isSecondSideFast = true;
    console.log( this.isSecondSideFast )
  }
  
  navigateToLogin(){
    this.router.navigateByUrl('/login');
    }


  async toastFunction(title:string,isSuccess:boolean){
    this.toastContent= title;
    this.isToastTypeSuccess =isSuccess;
    await this.delay(0);
    this.isShowToast=true;
    await this.delay(0);
    this.isShowToast=false;
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
