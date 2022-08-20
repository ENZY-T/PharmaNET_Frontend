import { prescriptionViewItem } from './../../models/presctiptionItem';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalData } from 'src/app/GlobalData';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.scss'],
})
export class PrescriptionListComponent implements OnInit {
  globalData = GlobalData;
  products: prescriptionViewItem[] = [];

  cols: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.fetchData(this.globalData.baseUrl + 'api/prescriptions');

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'prescriptionUrl', header: 'Prescription' },
      { field: 'email', header: 'Email' },
      { field: 'telephone', header: 'Telephone' },
    ];
  }

  fetchData(url: string) {
    this.httpClient.get(url).subscribe(
      (val) => {
        this.products = val as prescriptionViewItem[];
      },
      (error) => {
        //Add Toast(error + status code)
      }
    );
  }
}
