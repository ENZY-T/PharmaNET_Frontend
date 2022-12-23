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
    return this.http.put(`${this.baseURL}User`, data);
  }
  pharmacyDataPost(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}Pharmacy`, data);
  }
  subcribe(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}Subscribe`, data);
  }
  getSubcribe(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}Subscribe/Subscribed`, data);
  }

  pharmacyDataPut(data: any): Observable<any> {
    console.log(data);
    return this.http.put(`${this.baseURL}Pharmacy`, data);
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
    console.log("Owners");
    return this.http.post(`${this.baseURL}User/PharmacyOwners`, data);
  }
  //save pharmacy medCards
  saveMedCards(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}Cards`, data);
  }
  getMedCards(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}Cards/PharmacyCards`, data);
  }

  getOwnerInventry(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}Inventory/getOwnerInventory`, data);
  }
  getOwnerPrescriptionsList(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}Prescriptions/PharmacyPrescriptions`, data);
  }

  getMedicineIncludePharmacy(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}getMedicineIcludePharmacy`, data);
  }

  getNearestPharmacy(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}search/sort/0`, data);
  }

}
