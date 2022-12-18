import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { configData } from '../assets/config';

@Injectable({
  providedIn: 'root'
})
export class CustomerServicesService {

  readonly baseURL =configData.baseURL;
  
 
  constructor(private http:HttpClient) { }

  uploadPrescription(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}Prescriptions`, data);
  }
  getSelectedPharmacy(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}User/PharmacyDetails`, data);
  }

}
