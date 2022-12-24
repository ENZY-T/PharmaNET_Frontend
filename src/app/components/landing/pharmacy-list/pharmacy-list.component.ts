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
  searchText:String="";

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
    let lat=localStorage.getItem("latitude");
    let lng=localStorage.getItem("longitude");
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

 if(this.searchText !=""){
  console.log("not empty val");
  console.log(this.searchText);
  this.service.getNearestPharmacy(data)
  .subscribe(
   (val) => {
       console.log("Nearest Pharmacies");
       this.pharmacyCard =[];
       this.pharmacyCard =val;
       console.log(val);
       

   },
   response => {
    if(response.status == 404){
      this.pharmacyCard =[];
    }
    console.log("Nearest Pharmacies error");
    
     //  console.log("POST call in error", response);
      
   },
   () => {
      // console.log("The POST observable is now completed.");
   });
 }
 else{
  console.log("empty val");
  console.log(this.searchText);
  this.onGetPharmacy();
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
