import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { medCard } from 'src/app/models/med-card';

@Component({
  selector: 'app-all-promotions',
  templateUrl: './all-promotions.component.html',
  styleUrls: ['./all-promotions.component.scss']
})
export class AllPromotionsComponent implements OnInit {


  medicineCards: medCard[] = [];
  addedMedicines: medCard[] = [];
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.medicineCards = [
      { id:0, name: 'Synthroid', discount:20, isSelect:false,  price:1000, prevPrice:1500, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:3 },
      { id:1, name: 'Crestor',   discount:35,   isSelect:false,  price:2000,prevPrice:2300, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/7/3/735334_1.jpg',ratingNumber:2 },
      { id:2, name: 'Ventolin',  discount:34,  isSelect:false,  price:3000,prevPrice:3400, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/8/183804_1.jpg',ratingNumber:3 },
      { id:3, name: 'Nexium',    discount:12,   isSelect:false,  price:4000,prevPrice:4200, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:2 },
      { id:4, name: 'Solostar',  discount:28,  isSelect:false,  price:3000, prevPrice:3600,image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/8/183804_1.jpg',ratingNumber:3 },
      { id:5, name: 'Diskus ',   discount:10,  isSelect:false,  price:4000, prevPrice:4100, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:2 },
      { id:6, name: 'Synthroid', discount:20, isSelect:false,  price:1000, prevPrice:1500, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:3 },
      { id:7, name: 'Crestor',   discount:35,   isSelect:false,  price:2000,prevPrice:2300, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/7/3/735334_1.jpg',ratingNumber:2 },
      { id:8, name: 'Ventolin',  discount:34,  isSelect:false,  price:3000,prevPrice:3400, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/8/183804_1.jpg',ratingNumber:3 },
      { id:9, name: 'Nexium',    discount:12,   isSelect:false,  price:4000,prevPrice:4200, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:2 },
      { id:10, name: 'Solostar',  discount:28,  isSelect:false,  price:3000, prevPrice:3600,image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/8/183804_1.jpg',ratingNumber:3 },
      { id:11, name: 'Diskus ',   discount:10,  isSelect:false,  price:4000, prevPrice:4100, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:2 }

  ];
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
    //  this.toastFunction(item.name +" Added to Cart",true);
    }
    this.medicineCards[index] = item;
    console.log(this.medicineCards);
  }
  onNavigateToCustomerView(){
    this.router.navigateByUrl('/customerView');

  }

}
