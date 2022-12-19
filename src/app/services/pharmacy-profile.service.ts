import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { configData } from '../assets/config';

@Injectable({
  providedIn: 'root'
})
export class PharmacyProfileService {

  readonly baseURL =configData.baseURL;

  constructor(private http:HttpClient) { }

  pharmacyOwnerData(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}User`, data);
  }
  pharmacyDataPost(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}Pharmacy`, data);
  }
  getAllPharmacyData(): Observable<any> {
    console.log("Call");
    return this.http.get(`${this.baseURL}Pharmacy`);
  }
  getSelectedPharmacy(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}User/PharmacyDetails`, data);
  }
  getSelectedPharmacyOwner(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}User/PharmacyDetails`, data);
  }
}
