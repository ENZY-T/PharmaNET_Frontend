import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine-card-prev',
  templateUrl: './medicine-card-prev.component.html',
  styleUrls: ['./medicine-card-prev.component.scss']
})
export class MedicineCardPrevComponent implements OnInit {
  
  ratingNumber: number = 3;
  uploadedFiles: any[] = [];
  name:String ='med1';
  price:number=1000;

  constructor() { }

  ngOnInit(): void {
  }
  onAddRating(){

  }
}
