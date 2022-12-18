import { Component, OnInit } from '@angular/core';
import { AboutComapany } from 'src/app/models/aboutCompany';
import { CustomerServicesService } from 'src/app/services/customer-services.service';

@Component({
  selector: 'app-about-pharmacy',
  templateUrl: './about-pharmacy.component.html',
  styleUrls: ['./about-pharmacy.component.scss']
})
export class AboutPharmacyComponent implements OnInit {

  aboutCompany: AboutComapany[] = [];
  dataName:string="";
  dataAbout:string="";
  dataImage?:string;
  constructor(private service:CustomerServicesService) { }

  ngOnInit(): void {
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
         console.log(val.about);
         this.dataName=val.name;
         this.dataAbout=val.about;
         console.log(this.dataName);

     },
     response => {
      // this.toastFunction("User registered Faild",false);
      
       //  console.log("POST call in error", response);
      //   this.isBlock=false;
     },
     () => {
        // console.log("The POST observable is now completed.");
     });

     this.aboutCompany = [
      {
          name:this.dataName,
          about: this.dataAbout,
          image: 'https://www.healthguard.lk/pub/media/Home/trans-subscribe3_1_.png'
      }
    ]
    
 }

   
  

}
