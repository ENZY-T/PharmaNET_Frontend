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

  //  this.isBlock=true;
  //  await this.delay(4000);
  //  this.isBlock=false;

  }

  add(){
    console.log("Add");
    localStorage.setItem("UserName","Isuru");
    let name =localStorage.getItem("UserName");
    console.log(name);
  }
  remove(){
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
          console.log("POST call successful value returned in body", val);
        //  this.isBlock=false;
      },
      response => {
          console.log(response)
          console.log(response.status)
          if(response.status == 200){
            this.toastFunction("Customer log successfully",true);
            this.isBlock=false;
          }
          else{
            this.toastFunction("Customer login Faild",false);
            this.isBlock=false;
          }
      },
      () => {
          console.log("The POST observable is now completed.");
      });
   }
  
  async navigateToSignUp(){
  //  this.remove();
   // this.toastFunction("Failed to add",false);
    this.router.navigateByUrl('/registration');
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
