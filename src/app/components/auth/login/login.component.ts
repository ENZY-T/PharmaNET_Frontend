import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
import { AuthorizationsService } from 'src/app/services/authorizations.service';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import jwt_decode from 'jwt-decode';

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
    this.removeFromLocalStorage();

    let userLogData =localStorage.getItem("UserLog");
    console.log(userLogData);
   

  }


  removeFromLocalStorage(){
    console.log("Remove");
    localStorage.removeItem("UserName");
    let name =localStorage.getItem("UserName");
    console.log(name);
    localStorage.removeItem("SelectedPharmcyEmail");
  }

  onLogin(){
   this.onLoginValidate();
//   let token  ="eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IklzdXJ1MSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Imxha3NoYW5pc3VydTBAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiSXN1cnUxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3VybmFtZSI6Ikxha3NzaGFuMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImN1c3RvbWVyIiwiZXhwIjoxNjYyMTM5NDIyLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxLyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvIn0.A4M8GpHDXHCCflBJekVc0KXsMBueHYHAHABgmep9WKA";
//  localStorage.setItem('token',token);
//   this.router.navigateByUrl('/landing');
  }

  async onLoginValidate(){
   
    this.isBlock=true;
    let data={
     email:this.username?.value,
     password:this.password?.value
    }
    
    this.service.userLogin(data)
    .subscribe(
      (val) => {
        console.log("val");
          console.log(val);
          this.onLoginSuccess(val);
       
      },
      response => {
         console.log(response.error.text);

         const tokenInfo = this.getDecodedAccessToken(response.error.text); // decode token
         const expireDate = tokenInfo.exp; // get token expiration dateTime
         let token  ="eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IklzdXJ1MSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Imxha3NoYW5pc3VydTBAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiSXN1cnUxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3VybmFtZSI6Ikxha3NzaGFuMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImN1c3RvbWVyIiwiZXhwIjoxNjYyMTM5NDIyLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxLyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvIn0.A4M8GpHDXHCCflBJekVc0KXsMBueHYHAHABgmep9WKA";
         console.log(tokenInfo);
         console.log(tokenInfo.role );
         console.log("response.body");
       //   console.log(response.status)
          if(response.status == 200){
           // this.onLoginSuccess(response);
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
  
  getDecodedAccessToken(token: string): any {
  try {
    return jwt_decode(token);
  } catch(Error) {
    return null;
  }
}

  async navigateToSignUp(){
   //  this.remove();
   // this.toastFunction("Failed to add",false);
    this.router.navigateByUrl('/registration');
  }
  async onLoginSuccess(res:any){
    this.addToLocalStorage(res);
    this.toastFunction("User log successfully",true);
    this.isBlock=false;
    await this.delay(100);
    
    //this.router.navigateByUrl('/landing');//this must be remove
    if(res.role == "Patient"){
     this.router.navigateByUrl('/landing');
    }
    else if(res.role =="Pharmacy"){
      this.router.navigateByUrl('/pharma-dash');
     }
  }
  
  addToLocalStorage(val:any){
    var fullName=val.fName +" " +val.lName;
    localStorage.setItem("FName",val.fName);
    localStorage.setItem("LName",val.lName);
    localStorage.setItem("UserFullName",fullName);
    
    localStorage.setItem("UserName",val.email);
    
    localStorage.setItem("Role",val.role);
    localStorage.setItem("UserLog","true");//set local storage user log true
    localStorage.setItem("SelectedPharmcyEmail",val.email);
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
