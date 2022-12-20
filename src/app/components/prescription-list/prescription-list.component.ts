import { prescriptionViewItem } from './../../models/presctiptionItem';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalData } from 'src/app/GlobalData';
import { PharmacyProfileService } from 'src/app/services/pharmacy-profile.service';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.scss'],
})
export class PrescriptionListComponent implements OnInit {
  globalData = GlobalData;
  products: prescriptionViewItem[] = [];

  cols: any[] = [];

  constructor(private httpClient: HttpClient,private service:PharmacyProfileService) {}

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


  getMedCardsArray(){
    let pharmacyOwnerEmail =localStorage.getItem("UserName");;
    this.service.getMedCards(pharmacyOwnerEmail)
    .subscribe(
      (val) => {
        console.log("owner prescriptions received");
        console.log(val);
        this.products =val;
 
      },
      response => {
         console.log(response.error.text);

      
         console.log("response.body");
       //   console.log(response.status)
          if(response.status == 201){
           // this.onLoginSuccess(response);
          }
          else{
           
            
          }
      },
      () => {
        // console.log("The POST observable is now completed.");
      });


  }

}
