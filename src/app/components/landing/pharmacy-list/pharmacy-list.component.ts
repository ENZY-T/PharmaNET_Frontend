import { Component, OnInit } from '@angular/core';
import { pharmacyCard,pharmacyCardsData } from 'src/app/models/med-card';
import { PharmacyProfileService } from 'src/app/services/pharmacy-profile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pharmacy-list',
  templateUrl: './pharmacy-list.component.html',
  styleUrls: ['./pharmacy-list.component.scss']
})
export class PharmacyListComponent implements OnInit {
 // pharmacyCard: pharmacyCard[] = [];
  pharmacyCard: pharmacyCardsData[] = [];
  searchText?:String;

  checked: boolean = false;
  isLocationBased: String = "Location Not Based";
  constructor(private service:PharmacyProfileService, private router: Router) { }

  ngOnInit(): void {
   this.onGetPharmacy();
  }
  greet(event:any){
    console.log(event);
   // console.log(event.email);
 

    localStorage.setItem("SelectedPharmcyEmail",event.email);
    
    this.router.navigateByUrl('/customerView');
  }
  async onGetPharmacy(){
    console.log("asking...");
    this.service.getAllPharmacyData()
    .subscribe(
      (val) => {
        console.log("response");
        console.log(val);
        this.pharmacyCard =val;
      },)
  }
  onSearch(){
   
    this.onGetSearchPharmacies()
  }
  
  onChange(){
    console.log(this.searchText);
    let lat=localStorage.getItem("longitude");
    let lng=localStorage.getItem("latitude");
    var data;
    if(this.checked){
      this.isLocationBased ="Location Based";
       data={
        SearchKey:this.searchText,
        CurrentLatitude:lat,
        CurrentLongitude:lng,

      }
      console.log(data);

    }
    else{
      this.isLocationBased ="Location Not Based";
       data={
        SearchKey:this.searchText,
        CurrentLatitude:"",
        CurrentLongitude:"",

      }
      console.log(data);
    }
   

  }
  onChangeCheck(){

    if(this.checked){
      this.isLocationBased ="Location Based";
      

    }
    else{
      this.isLocationBased ="Location Not Based";
      

      }
    
    
   

  }

  async onGetSearchPharmacies(){
    console.log("get pharmacy...");
    this.service.getMedicineIncludePharmacy(this.searchText)
    .subscribe(
      (val) => {
        console.log("received relavent pharmacies");
        console.log(val);
        this.pharmacyCard =val;
      },)
  }

}
