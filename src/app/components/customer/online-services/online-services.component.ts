import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-services',
  templateUrl: './online-services.component.html',
  styleUrls: ['./online-services.component.scss']
})
export class OnlineServicesComponent implements OnInit {

  display: boolean = false;
  heading:string = "Upload Prescription";

  image1:string="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm373batch15-217-01.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d8bbc66e02e81095950de55fcc9347f5";
  image2:string="https://wwwnc.cdc.gov/travel/images/pharmacist-meds.jpg";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  onUploadPrescription() {
    this.router.navigateByUrl('/prescriptionUploadComponent');
  }

 
  onUpload() {
    this.heading = "Upload Prescription";
    this.display = true;
    
  }
  onUploadShopNow(){
   this.heading = "Select items";
    this.display = true;
  }

}
