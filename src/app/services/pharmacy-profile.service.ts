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
    return this.http.put(`${this.baseURL}/pharmacyOwnerData`, data);
  }
  pharmacyData(data: any): Observable<any> {
    console.log(data);
    return this.http.put(`${this.baseURL}/pharmacyOwnerData`, data);
  }

}