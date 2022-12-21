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
  role?: String;


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
  latitude:string ="";
  longitude:string ="";
  
  registrationForm = new FormGroup({

    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(1)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(1)]),
    privacyCheck : new FormControl(),
    role1 : new FormControl(''),

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
  get role1(){
    return this.registrationForm.get('role1')
  }

 
  constructor(private service:AuthorizationsService,private router: Router) { }

  ngOnInit(): void {
    
  }
  onChange(e:any){
    console.log(this.selectedValue);
  }

  onDisplayLocation(location:any){
    console.log("this.latitude");
    this.latitude=location.latitude;
    this.longitude=location.longitude;
  
    console.log(this.latitude);
    console.log(this.longitude);

    localStorage.setItem("latitude",this.latitude);
    localStorage.setItem("longitude",this.longitude)
  }

 async onRegister(){
    console.log("on reg customer");
    this.isBlock=true;

    let data={
      FName:this.firstName?.value ,
      LName: this.lastName?.value,
      Email :this.email?.value,
      Password :this.password?.value,
      confirmPassword :this.confirmPassword?.value,
      role:this.role1?.value
     }
     //
     console.log(data);
  
     
     this.service.userRegister(data)
     .subscribe(
      (val) => {
          console.log(val);
          console.log(val.fName);
          console.log(val.role);
          console.log(val.email);
          this.onRegisterSuccess(val);

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
  async onRegisterSuccess(val:any){
    this.addToLocalStorage(val);
    this.toastFunction("User registered successfully",true);
    this.isBlock=false;
    await this.delay(100);
  //  this.router.navigateByUrl('/landing');//this must be remove
    if(val.role == "Patient"){
     this.router.navigateByUrl('/landing');
    }
    else if(val.role =="Pharmacy"){
      this.router.navigateByUrl('/pharma-dash');
     }
  }
  // addToLocalStorage(val:any){
  //   var fullName=val.fName +" " +val.lName;
  //   localStorage.setItem("UserFullName",fullName);
  //   localStorage.setItem("UserName",val.email);
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

  addToLocalStorage(val:any){
    console.log(val);
    var fullName=val.fName +" " +val.lName;
    localStorage.setItem("FName",val.fName);
    localStorage.setItem("LName",val.lName);
    localStorage.setItem("UserFullName",fullName);
    
    localStorage.setItem("UserName",val.email);
    
    localStorage.setItem("Role",val.role);
    localStorage.setItem("UserLog","true");//set local storage user log true
    localStorage.setItem("SelectedPharmcyEmail",val.email);
  }

}
