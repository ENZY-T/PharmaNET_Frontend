import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  value="";

  isShowToast:boolean =false;
  toastContent:string="";
  isToastTypeSuccess:boolean =true ;

  cutomerData:any[]=[];
  constructor() { }

  ngOnInit(): void {
    this.cutomerData =[{
      'address':'1010 Avenue, sw 54321, chandigarh',
      'contactNumber':'98765432100',
      'email':'abcmail@info.com'
    }]
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
    onSubsrcibe(){
      if(this.value ==""){
        this.toastFunction("Please Enter the Email",false);

      }
      else{
        this.toastFunction( this.value + " Subcribed successfully",true);
        this.value ="";

      }

    }
}
