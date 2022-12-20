import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServicesService } from 'src/app/services/customer-services.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  dataName:string="";
  isPrevOk:boolean =false;

  constructor( private router: Router,private service:CustomerServicesService) { }
  ngOnInit(): void {
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
