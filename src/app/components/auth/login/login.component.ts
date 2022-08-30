import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
import { AuthorizationsService } from 'src/app/services/authorizations.service';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  loadingTitle:String="Loading...";
  isBlock:boolean =false;
  
  isShowToast:boolean =false;
  toastContent:string="";
  isToastTypeSuccess:boolean =true ;

  loginForm = new FormGroup({
    username: new FormControl('isuru123@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('Isu@123', [Validators.required, Validators.minLength(1)])
  })

  get username(){
    return this.loginForm.get('username')
  }
  
  get password(){
    return this.loginForm.get('password')
  }

  constructor(
    private service:AuthorizationsService ,
    private router: Router,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    public translate:TranslateService
     ) { 
      translate.setDefaultLang('English');
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang?.match(/en|fr/) ? browserLang :'English');
     }

  async ngOnInit(): Promise<void> {
    this.primengConfig.ripple = true;
    this.removeFromLocalStorage();

    let userLogData =localStorage.getItem("UserLog");
    console.log(userLogData);
    // if(userLogData == "true"){
    //   this.router.navigateByUrl('/pharmacyOwnerProfile');//
    // }

  }


  removeFromLocalStorage(){
    console.log("Remove");
    localStorage.removeItem("UserName");
    let name =localStorage.getItem("UserName");
    console.log(name);
  }
  async onLogin(){
   
    this.isBlock=true;
    let data={
     email:this.username?.value,
     password:this.password?.value
    }
    this.service.userLogin(data)
    .subscribe(
      (val) => {
          console.log(val);
          this.onLoginSuccess(val);
       
      },
      response => {
       //   console.log(response)
       //   console.log(response.status)
          if(response.status == 200){
            this.onLoginSuccess(response);
          }
          else{
            this.toastFunction("Customer login Faild",false);
            this.isBlock=false;
          }
      },
      () => {
        // console.log("The POST observable is now completed.");
      });
   }
  
  
  async navigateToSignUp(){
  //  this.remove();
   // this.toastFunction("Failed to add",false);
    this.router.navigateByUrl('/registration');
  }
  async onLoginSuccess(res:any){
    this.addToLocalStorage(res);
    this.toastFunction("Customer log successfully",true);
    this.isBlock=false;
    await this.delay(100);
    localStorage.setItem("UserLog","true");//set local storage user log true
    this.router.navigateByUrl('/landing');//this must be remove
    // if(res.user == "user"){
    //   this.router.navigateByUrl('/landing');
    // }
    // else if(res.user =="pharmacy"){
    //   this.router.navigateByUrl('/pharma-dash');
    // }
  }
  
  addToLocalStorage(val:any){
    var fullName=val.fName +" " +val.lName;
    localStorage.setItem("UserFullName",fullName);
    localStorage.setItem("UserName",val.email);
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
