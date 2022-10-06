import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-card',
  templateUrl: './pharmacy-card.component.html',
  styleUrls: ['./pharmacy-card.component.scss']
})
export class PharmacyCardComponent implements OnInit {
  @Input() item?: any;
  constructor() { }

  ngOnInit(): void {
  }

}
