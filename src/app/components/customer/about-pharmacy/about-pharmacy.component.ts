import { Component, OnInit } from '@angular/core';
import { AboutComapany } from 'src/app/models/aboutCompany';

@Component({
  selector: 'app-about-pharmacy',
  templateUrl: './about-pharmacy.component.html',
  styleUrls: ['./about-pharmacy.component.scss']
})
export class AboutPharmacyComponent implements OnInit {

  aboutCompany: AboutComapany[] = [];
  constructor() { }

  ngOnInit(): void {
    this.aboutCompany = [
      {
          name: 'ABC Pharmacy',
          about: 'ABC Pharmacy Limited a 100% subsidiary of Sunshine Healthcare is one of the 1st branded retail Pharmaceutical Chains in Sri Lanka that has entered the market with a view of creating a difference in the retail pharmaceutical trade. Headed by a team of professionals, ABC has introduced an innovative concept centered on superior customer care, latest technology in data management, a wide product assortment, affordable prices and a host of value additions.',
          image: 'https://www.healthguard.lk/pub/media/Home/trans-subscribe3_1_.png'
      }
    ]
  }

}
