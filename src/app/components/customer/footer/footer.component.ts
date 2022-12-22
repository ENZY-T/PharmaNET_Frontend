import { Component, OnInit } from '@angular/core';
import { CustomerServicesService } from 'src/app/services/customer-services.service';
import { PharmacyProfileService } from 'src/app/services/pharmacy-profile.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  value="";
  subcriberEmail:String="";
  isShowToast:boolean =false;
  toastContent:string="";
  isToastTypeSuccess:boolean =true ;

  cutomerData:any[]=[];
  getData:any[]=[];
  dataAddress:string="";
  dataEmail:string="";
  dataContact:string="";
  constructor(private service:CustomerServicesService, private service1:PharmacyProfileService) { }

  ngOnInit(): void {
    let pharmacyEmail =localStorage.getItem("SelectedPharmcyEmail");
    console.log(pharmacyEmail);
    let data={
      name: "string",
      email: pharmacyEmail
    }

    this.service.getSelectedPharmacy(data)
    .subscribe(
     (val) => {
         console.log("Footer");
         console.log(val);
         this.dataAddress=val.address;
         this.dataContact=val.contact_Number;
         this.dataEmail=val.email


        

     },
     response => {
      // this.toastFunction("User registered Faild",false);
      
       //  console.log("POST call in error", response);
      //   this.isBlock=false;
     },
     () => {
        // console.log("The POST observable is now completed.");
     });

    this.cutomerData =[{
      'address':'1010 Avenue, sw 54321, chandigarh',
      'contactNumber':'98765432100',
      'email':'abcmail@info.com',
      'categories':[
        {'id':1,'item':'Home'},
        {'id':2,'item':'About'},
        {'id':3,'item':'Services'},
        {'id':4,'item':'Portfolio'},
        {'id':5,'item':'Contact'}
      ],
      'brands':[
        {'id':1,'item':'Abraxane'},
        {'id':2,'item':'Camzyos'},
        {'id':3,'item':'Entresto'},
        {'id':4,'item':'Idamycin'},
        {'id':5,'item':'Glucagon'}
      ],
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


    onSubsrcibe()
    {
      let receiverEmail=localStorage.getItem("SelectedPharmcyEmail");
      let data={
        subscriberEmail :this.subcriberEmail,
        recieverEmail :receiverEmail
      }
      console.log(this.subcriberEmail);
      console.log(data);
  
  
      this.service1.subcribe(data)
      .subscribe(
        (val) => {
          //  this.isBlock=false;
            this.toastFunction("Succefully Subcribed",true);
            // this.onCheckInventy();
            console.log("Suncribed ok");
            console.log(val);
            this.subcriberEmail = "";
        },
        response => {
            if(response.status == 201){
            //  this.isBlock=false;
            this.toastFunction("Subcribed Failed",true);
            //  this.onCheckInventy();
            console.log("Suncribed 201");
            console.log(response);
            }
            else{
              this.toastFunction("Pharmacy Owner Details Updated Failed",false);
              // this.isBlock=false;
              console.log("Suncribed error");
              console.log(response);
            }
        },
        () => {
            // this.isBlock=false;
        });
  
  
    }

    onSubsrcibew(){




      if(this.value ==""){
        this.toastFunction("Please Enter the Email",false);

      }
      else{
        this.toastFunction( this.value + " Subcribed successfully",true);
        this.value ="";

      }

    }
}
