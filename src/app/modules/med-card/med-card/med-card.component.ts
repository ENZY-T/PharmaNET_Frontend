import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-med-card',
  templateUrl: './med-card.component.html',
  styleUrls: ['./med-card.component.scss']
})
export class MedCardComponent implements OnInit {

  @Input() item?: any;
  @Output() public childEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
  }
  addToCart(e:any){
    this.childEvent.emit(e);
  }
 


}
