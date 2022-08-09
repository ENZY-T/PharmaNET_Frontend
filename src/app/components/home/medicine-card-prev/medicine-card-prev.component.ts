import { Component, OnInit } from '@angular/core';
import { medCard } from 'src/app/models/med-card';

@Component({
  selector: 'app-medicine-card-prev',
  templateUrl: './medicine-card-prev.component.html',
  styleUrls: ['./medicine-card-prev.component.scss']
})
export class MedicineCardPrevComponent implements OnInit {
  
  medicineCard: medCard[] = [];
  
  ratingNumber: number = 3;
  uploadedFiles: any[] = [];
  name:String ='med1';
  price:number=1000;
  image:String ='https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg';
  constructor() {}

  ngOnInit(): void {
    this.medicineCard = [
      { name: 'med1', price:1000,image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:3 },
      { name: 'mde2', price:2000,image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:2 }
  ];
  }
  onAddRating(){

  }
}
