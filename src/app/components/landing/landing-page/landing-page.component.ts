import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  latitude:string ="";
  longitude:string ="";
  constructor() { }

  ngOnInit(): void {
  }

  onClickCreatePharmacy(){
    console.log("Navigate to create pharmcay");
  }

  onDisplayLocation(location:any){
    console.log("this.latitude");
    this.latitude=location.latitude;
    this.longitude=location.longitude;
  
    console.log(this.latitude);
    console.log(this.longitude);

    localStorage.setItem("latitude",this.latitude);
    localStorage.setItem("longitude",this.longitude)
  }
}

