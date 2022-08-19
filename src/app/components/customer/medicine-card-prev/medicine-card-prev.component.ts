import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-medicine-card-prev',
  templateUrl: './medicine-card-prev.component.html',
  styleUrls: ['./medicine-card-prev.component.scss']
})
export class MedicineCardPrevComponent implements OnInit {
  

  @Input() item?: any;
  @Output() public childEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
  }
  addToCart(e:any){
    this.childEvent.emit(e);
  }
 


}
