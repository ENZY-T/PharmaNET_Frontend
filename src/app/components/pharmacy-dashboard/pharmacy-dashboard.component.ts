import { dummyProduct2 } from '../../models/product';
import { Product, dummyProduct } from '../../models/product';
import { Component, OnInit, Type } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { PharmacyProfileService } from 'src/app/services/pharmacy-profile.service';


@Component({
  selector: 'app-pharmacy-dashboard',
  templateUrl: './pharmacy-dashboard.component.html',
  styleUrls: ['./pharmacy-dashboard.component.scss'],
})
export class PharmacyDashboardComponent implements OnInit {
  requestCount: number = 0;
  dummyProductArray: Product[] = [dummyProduct, dummyProduct2];
  selectedTab: string = 'inventory';

  userName:String |null="";
  pharmacyName:String |null="";
  
  items: any[]=[];
  subcriberList: any[]=[];

  constructor(private router: Router,private service1:PharmacyProfileService ,  private service:PharmacyProfileService) {}

  ngOnInit(): void {
   this.getPharmacy();
    let UserName=localStorage.getItem("UserFullName");
    this.userName=UserName;
    this.onSubsrcibe();

    this.items = [
      {
          label: 'Edit',
          icon: 'pi pi-pw pi-file',
          items: [
                  
            {label: 'Owner', icon: 'pi pi-fw pi-user-plus', command: () => {
                this.changeTab('pharmacyOwner'),this.onNavigatePharmacyOwner();
            }},
            {label: 'Pharmacy', icon: 'pi pi-money-bill', command: () => {
              this.changeTab('pharmacyProfile') ,this.onNavigatePharmacy();
          }},
          {label: 'Promotions', icon: 'pi pi-wallet', command: () => {
            this.changeTab('promotions');
          }},
          ]
      }
  ];
  }
  

 getPharmacy(){
  let pharmacyEmail =localStorage.getItem("SelectedPharmcyEmail");
  console.log(pharmacyEmail);
  let data={
    name: "string",
    email: pharmacyEmail
  }

  this.service.getSelectedPharmacy(data)
  .subscribe(
   (val) => {
       console.log("get pharmay  name");
       console.log(val.name);
       localStorage.setItem("PhamacyName",val.name);
       this.pharmacyName =val.name
      // this.dataAddress=val.address;
   

   },
   response => {
    console.log("get pharmay  data error2");
    
    // this.toastFunction("User registered Faild",false);
    
     //  console.log("POST call in error", response);
    //   this.isBlock=false;
   },
   () => {
    //console.log("get pharmay  data error1");
      // console.log("The POST observable is now completed.");
   });


  let isNavigateFromInventy =localStorage.getItem("navPharmacy");
  if(isNavigateFromInventy =="true"){
 //   this.saveBtn ="Save";
  }
 }

  onNavigatePharmacyOwner(){
    localStorage.setItem("navOwner","true");
  }

  onNavCustomerPrev()
  {
    localStorage.setItem("isOwnerNavCustomerView","True");
    this.router.navigateByUrl('/customerView');
  }

  
  onSubsrcibe()
  {
    let receiverEmail=localStorage.getItem("SelectedPharmcyEmail");
    let data={
      subscriberEmail :"",
      recieverEmail :receiverEmail
    }
   
    console.log(data);
    this.service1.getSubcribe(data)
    .subscribe(
      (val) => {
        //  this.isBlock=false;
         // this.toastFunction("Succefully Subcribed",true);
          // this.onCheckInventy();
          console.log("recevied ok");
          this.subcriberList =val;
          console.log(val);
         // this.subcriberEmail = "";
      },
      response => {
          if(response.status == 201){
          //  this.isBlock=false;
        //  this.toastFunction("Subcribed Failed",true);
          //  this.onCheckInventy();
          console.log("Suncribed 201");
          console.log(response);
          }
          else{
           // this.toastFunction("Pharmacy Owner Details Updated Failed",false);
            // this.isBlock=false;
            console.log("Suncribed error");
            console.log(response);
          }
      },
      () => {
          // this.isBlock=false;
      });


  }

  onNavigatePharmacy(){
    localStorage.setItem("navPharmacy","true");
  }

  onClick(){
    console.log("click");
  }

  changeTab(tab: string) {
    this.selectedTab = tab;
  }

  getActivityOfTab(tab: string) {
    if (tab === this.selectedTab) {
      return 'active';
    } else {
      return '';
    }
  }
}
