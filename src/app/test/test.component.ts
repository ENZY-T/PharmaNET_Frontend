import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { medCard } from '../models/med-card';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  medicineCards: medCard[] = [];

  constructor() { }

  ngOnInit(): void {
    this.medicineCards = [
      { id:0, name: 'med1', price:1000,image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:3 },
      { id:1, name: 'mde2', price:2000,image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/7/3/735334_1.jpg',ratingNumber:2 },
      { id:2, name: 'med3', price:3000,image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/8/183804_1.jpg',ratingNumber:3 },
      { id:3, name: 'mde4', price:4000,image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:2 },
      { id:4, name: 'med3', price:3000,image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/8/183804_1.jpg',ratingNumber:3 },
      { id:5, name: 'mde4', price:4000,image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:2 }

  ];
  }

}
