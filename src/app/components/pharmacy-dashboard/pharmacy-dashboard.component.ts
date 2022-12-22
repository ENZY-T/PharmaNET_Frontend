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


  items: any[]=[];
  subcriberList: any[]=[];

  constructor(private router: Router,private service1:PharmacyProfileService) {}

  ngOnInit(): void {
    console.log("Bisadi");
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
