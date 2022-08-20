import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { configData } from '../assets/config';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationsService {

  readonly baseURL =configData.baseURL;

  constructor(private http:HttpClient) { }


  userLogin(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}auth/login`, data);
  }
  
  userSignUp(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}auth/signUp`, data);
  }
  register(data: any): Observable<any> {
 
    return this.http.post(`${this.baseURL}auth/register`, data);
  }

  customerRegister(data: any): Observable<any> {
    //console.log(data);
    return this.http.post(`${this.baseURL}auth/register`, data);
  }
  pharmacyRegister(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}auth/pharmacyRegister`, data);
  }
}
