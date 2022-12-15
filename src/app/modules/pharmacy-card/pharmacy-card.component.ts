import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pharmacy-card',
  templateUrl: './pharmacy-card.component.html',
  styleUrls: ['./pharmacy-card.component.scss']
})
export class PharmacyCardComponent implements OnInit {
  @Input() item?: any;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  select(e:any){
    this.childEvent.emit(e);
  }
}
