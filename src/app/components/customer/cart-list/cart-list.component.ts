import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { medCard } from 'src/app/models/med-card';



@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  selectedList: medCard[] = [];
  
  constructor( private router: Router) { }

  ngOnInit(): void {

    
    this.selectedList = [
      { id:0, name: 'Synthroid', isSelect:false, price:1000, prevPrice:1500, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:3 },
      { id:1, name: 'Crestor',   isSelect:false,  price:2000,prevPrice:2300, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/7/3/735334_1.jpg',ratingNumber:2 },
      { id:2, name: 'Ventolin',  isSelect:false,  price:3000,prevPrice:3400, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/8/183804_1.jpg',ratingNumber:3 },
      { id:3, name: 'Nexium',    isSelect:false,  price:4000,prevPrice:4200, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:2 },
      { id:4, name: 'Solostar',  isSelect:false,  price:3000, prevPrice:3600,image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/8/183804_1.jpg',ratingNumber:3 },
      { id:5, name: 'Diskus ',   isSelect:false,  price:4000, prevPrice:4100, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:2 }

  ];

  }
  onBack(){
    this.router.navigateByUrl('/customerView');

  }

}
