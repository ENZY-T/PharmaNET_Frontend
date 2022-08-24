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
  get password(){
    return this.registrationForm.get('password')
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword')
  }
  get privacyCheck(){
    return this.registrationForm.get('privacyCheck')
  }
 
  constructor(private service:AuthorizationsService,private router: Router) { }

  ngOnInit(): void {
    
  }
  onChange(e:any){
    console.log(this.selectedValue);
  }
 async onRegister(){
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
  
     this.service.userRegister(data)
     .subscribe(
      (val) => {
        //  console.log("POST call successful value returned in body", val);
          this.onRegisterSuccess();

      },
      response => {
        this.toastFunction("User registered Faild",false);
       
        //  console.log("POST call in error", response);
          this.isBlock=false;
      },
      () => {
         // console.log("The POST observable is now completed.");
      });

     
  }
  async onRegisterSuccess(){
    this.toastFunction("User registered successfully",true);
    this.isBlock=false;
    await this.delay(2000);
    this.router.navigateByUrl('/login');
  }
  // async onPharmacyRegisterSuccess(){
  //   this.toastFunction("Pharmacy registered successfully",true);
  //   this.isBlock=false;
  //   await this.delay(2000);
  //   this.router.navigateByUrl('/pharmacyProfile');
  // }
  //  onPharmacyRegister(){

  //   this.isBlock=true;
  //   this.role ='pharmacy';
  //   let data={
  //     FName:this.firstName?.value ,
  //     LName: this.lastName?.value,
  //     Email :this.email?.value,
  //     Password :this.password?.value,
  //     confirmPassword :this.confirmPassword?.value,
  //     role:this.role
  //    }
  //  console.log(data);

  //    this.service.pharmacyRegister(data)
  //    .subscribe(
  //     (val) => {
  //        // console.log("POST call successful value returned in body", val);
  //         this.onPharmacyRegisterSuccess();
  //         this.isBlock=false;

  //     },
  //     response => {
  //       this.toastFunction("Pharmacy Owner registered Faild",false);
       
  //        // console.log("POST call in error", response);
  //         this.isBlock=false;
  //     },
  //     () => {
  //        // console.log("The POST observable is now completed.");
  //     });

  // }

  // onRegister(){
  //   let data={
      
  //     name:this.firstName?.value +" " +this.lastName?.value,
  //     email:this.email?.value,
  //     mobileNumber:this.mobileNumber?.value,
  //     password:this.password?.value,
  //     pharmacy:this.pharmacyName?.value
  //    }
  
  //    this.service.register(data)
  //    .subscribe(res => {
  //         console.log(res.st);
  //    });
  // }
  // onNavigateFirstSide(){
  //   this.isFirstSideFast = false;
  // }
  // onNavigateSecondSide(){
  //   this.isFirstSideFast = true;
  //   this.isSecondSideFast = false;
  // }
  // onNavigateThirdSide(){
  //   this.onPharmacyRegister();

  //   // this.isSecondSideFast = true;
  //    console.log(" this.isSecondSideFast" )
  // }
  
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
