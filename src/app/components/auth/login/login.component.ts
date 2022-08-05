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
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(1)])
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

   this.isBlock=true;
   await this.delay(4000);
   this.isBlock=false;

  }
 delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
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
   // this.add();
    let data={
     email:this.username?.value,
     password:this.password?.value
    }
    this.service.userLogin(data)
    .subscribe(res => {
         console.log(res);
    });
   this.toastFunction("add successfully",true);
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
}
