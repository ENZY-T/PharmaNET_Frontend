import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.scss'],
})
export class PrescriptionListComponent implements OnInit {
  products: Product[] = [];

  cols: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.fetchData('https://localhost:5001/api/prescriptions');

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'prescription', header: 'Prescription' },
      { field: 'telephone', header: 'Telephone' },
    ];
  }

  fetchData(url: string) {
    this.httpClient.get(url).subscribe(
      (val) => {
        this.products = val as Product[];
      },
      (error) => {
        //Add Toast(error + status code)
      }
    );
  }
}
