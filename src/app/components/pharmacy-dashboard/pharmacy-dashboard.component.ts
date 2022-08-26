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
  requestCount: number = 0;
  dummyProductArray: Product[] = [dummyProduct, dummyProduct2];
  selectedTab: string = 'inventory';


  items: any[]=[];

  constructor() {}

  ngOnInit(): void {

    this.items = [
      {
          label: 'Edit',
          icon: 'pi pi-pw pi-file',
          items: [
                  
            {label: 'Owner', icon: 'pi pi-fw pi-user-plus', command: () => {
                this.changeTab('pharmacyOwner'),this.onNavigatePharmacyOwner();
            }},
            {label: 'Pharmacy', icon: 'pi pi-money-bill', command: () => {
              this.changeTab('pharmacyProfile') ,this.onNavigatePharmacy();
          }},
          {label: 'Promotions', icon: 'pi pi-wallet', command: () => {
            this.changeTab('promotions');
          }},
          ]
      }
  ];
  }
  
  onNavigatePharmacyOwner(){
    localStorage.setItem("navOwner","true");
  }

    
  onNavigatePharmacy(){
    localStorage.setItem("navPharmacy","true");
  }

  onClick(){
    console.log("click");
  }

  changeTab(tab: string) {
    this.selectedTab = tab;
  }

  getActivityOfTab(tab: string) {
    if (tab === this.selectedTab) {
      return 'active';
    } else {
      return '';
    }
  }
}
