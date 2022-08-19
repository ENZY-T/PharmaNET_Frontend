import { Component, OnInit } from '@angular/core';
import { medCard } from 'src/app/models/med-card';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  medicineCards: medCard[] = [];

  name:String ='Betadin';
  price:number=1000;
  ratingNumber: number = 3;
  image:String ='https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg';
 
  constructor() { }

  ngOnInit(): void {
    this.medicineCards = [
      { id:0, name: 'Synthroid', isSelect:false, price:1000, prevPrice:1500, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:3 },
      { id:1, name: 'Crestor',   isSelect:false,  price:2000,prevPrice:2300, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/7/3/735334_1.jpg',ratingNumber:2 },
      { id:2, name: 'Ventolin',  isSelect:false,  price:3000,prevPrice:3400, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/8/183804_1.jpg',ratingNumber:3 },
      { id:3, name: 'Nexium',    isSelect:false,  price:4000,prevPrice:4200, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:2 },
      { id:4, name: 'Solostar',  isSelect:false,  price:3000, prevPrice:3600,image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/8/183804_1.jpg',ratingNumber:3 },
      { id:5, name: 'Diskus ',   isSelect:false,  price:4000, prevPrice:4100, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:2 }

  ];
  }

}
