import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { medCard } from 'src/app/models/med-card';
import { PharmacyProfileService } from 'src/app/services/pharmacy-profile.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  medicineCards: medCard[] = [];
  responsiveOptions:any;
  message:String='';
  addedMedicines: medCard[] = [];

  isShowToast:boolean =false;
  toastContent:string="";
  isToastTypeSuccess:boolean =true ;

  constructor(private router: Router,private service:PharmacyProfileService) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
   this.getMedCardsArray();
  //   this.medicineCards = [
  //     { id:0, name: 'Synthroid', discount:20, isSelect:false,  price:1000, prevPrice:1500, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:3 },
  //     { id:1, name: 'Crestor',   discount:35,   isSelect:false,  price:2000,prevPrice:2300, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/7/3/735334_1.jpg',ratingNumber:2 },
  //     { id:2, name: 'Ventolin',  discount:34,  isSelect:false,  price:3000,prevPrice:3400, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/8/183804_1.jpg',ratingNumber:3 },
  //     { id:3, name: 'Nexium',    discount:12,   isSelect:false,  price:4000,prevPrice:4200, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:2 },
  //     { id:4, name: 'Solostar',  discount:28,  isSelect:false,  price:3000, prevPrice:3600,image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/8/183804_1.jpg',ratingNumber:3 },
  //     { id:5, name: 'Diskus ',   discount:10,  isSelect:false,  price:4000, prevPrice:4100, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:2 }

  // ];
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
  onAdd(e:any){
    this.addedMedicines.push(e);
    console.log(this.addedMedicines.length);
  

    console.log(e);
    this.updateItem(e);

  }



  updateItem(item:any){
    let index = this.medicineCards.indexOf(item);
    if(item.isSelect == true){
      item.isSelect =false;
    }
    else{
      item.isSelect =true;
      this.toastFunction(item.name +" Added to Cart",true);
    }
    this.medicineCards[index] = item;
    console.log(this.medicineCards);
  }

  onViewAllPromotions(){
    this.router.navigateByUrl('/allPromotions');
  }
  getMedCardsArray(){
    let pharmacyOwnerEmail =localStorage.getItem("UserName");
    let data={
      email:pharmacyOwnerEmail
    }
    this.service.getMedCards(data)
    .subscribe(
      (val) => {
        console.log("medCards received");
        console.log(val);
        this.medicineCards =val;
     
       
         
      },
      response => {

         console.log("response.body");
       //   console.log(response.status)
          if(response.status == 200){
            console.log("200");
            this.medicineCards =response;
          }
          else{
            console.log("Erro");
         
          }
      },
      () => {
        // console.log("The POST observable is now completed.");
      });

    } 
}
