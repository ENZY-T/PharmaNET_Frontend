import { dummyProduct2 } from '../../models/product';
import { Product, dummyProduct } from '../../models/product';
import { Component, OnInit, Type } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-pharmacy-dashboard',
  templateUrl: './pharmacy-dashboard.component.html',
  styleUrls: ['./pharmacy-dashboard.component.scss'],
})
export class PharmacyDashboardComponent implements OnInit {
  dummyProductArray: Product[] = [dummyProduct, dummyProduct2];
  selectedTab: string = 'inventory';

  constructor() {}

  ngOnInit(): void {}

  changeTab(tab: string) {
    this.selectedTab = tab;
  }

  getActivityOfTab(tab: string) {
    console.log(tab);
    if (tab === this.selectedTab) {
      return 'active';
    } else {
      return '';
    }
  }
}
