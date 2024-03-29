import { Component, OnInit ,Input} from '@angular/core';
import { medCard } from 'src/app/models/med-card';

@Component({
  selector: 'app-medicine-card-prev',
  templateUrl: './medicine-card-prev.component.html',
  styleUrls: ['./medicine-card-prev.component.scss']
})
export class MedicineCardPrevComponent implements OnInit {
  
  @Input() ratingNumber?: number;
  @Input() name?:String ;
  @Input() price?:number;
  @Input() image?:String;
  constructor() {}

  ngOnInit(): void {

  }
  onAddRating(){

  }
}
