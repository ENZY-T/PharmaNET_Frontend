import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CustomerServicesService } from 'src/app/services/customer-services.service';
import { PharmacyProfileService } from 'src/app/services/pharmacy-profile.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  dataName:string="";
  isPrevOk:boolean =false;
  display: boolean = false;
  products: Product[] = [];
  loading: boolean = true;
  statuses?: any[];

  constructor( private router: Router,private service1:PharmacyProfileService,private service:CustomerServicesService) { }
  ngOnInit(): void {
    this.statuses = [
      {label: 'INSTOCK', value: 'instock'},
      {label: 'LOWSTOCK', value: 'lowstock'},
      {label: 'OUTOFSTOCK', value: 'outofstock'}
  ];
  
    this.getOwnerInventry();
    this.onPrevDashboardLink();
    console.log("Test");
    
    let pharmacyEmail =localStorage.getItem("SelectedPharmcyEmail");
    console.log(pharmacyEmail);
    let data={
      name: "string",
      email: pharmacyEmail
    }

    this.service.getSelectedPharmacy(data)
    .subscribe(
     (val) => {
         console.log(val);
        
       this.dataName =val.name;

     },
     response => {
      // this.toastFunction("User registered Faild",false);
      
       //  console.log("POST call in error", response);
      //   this.isBlock=false;
     },
     () => {
        // console.log("The POST observable is now completed.");
     });

  
    
 }



 getOwnerInventry() {
  let pharmacyOwnerEmail =localStorage.getItem("UserName");
 
  var formData: any = new FormData();
  formData.append('email', pharmacyOwnerEmail);
  this.service1.getOwnerInventry(formData)
  .subscribe(
    (val) => {
      console.log("inventry received");
      console.log(val);
      this.products =val;
      this.loading = false;
    },
    response => {
       console.log(response);

       console.log("response.body");
     //   console.log(response.status)
        if(response.status == 200){
          console.log("inventry received");
          console.log(response);
          this.products =response;
          this.loading = false;
        }
        else{
         
         
        }
    },
    () => {
      // console.log("The POST observable is now completed.");
    });

  
}
onBack(){
  this.router.navigateByUrl('/customerView');

}
 onSearch(){
  console.log("Clicked");
  this.display =true;
 }
 onPrevDashboardLink()
 {
  let isTrue = localStorage.getItem("isOwnerNavCustomerView");
  if(isTrue == "True")
  {
    this.isPrevOk = true;
    console.log(this.isPrevOk);
  }
  else{
    console.log(this.isPrevOk);
  }
 }


 onNavigateToDashboard()
 {
  localStorage.removeItem("isOwnerNavCustomerView");
  this.router.navigateByUrl('/pharma-dash');
  

 }
  onUpload() {
    this.router.navigateByUrl('/prescriptionUploadComponent');
  }

}
