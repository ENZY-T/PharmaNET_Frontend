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
   
    return this.http.post(`${this.baseURL}auth/login`, data);
  }
  
  userSignUp(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}auth/signUp`, data);
  }


  userRegister(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}Auth/register`, data);
  }
 
  loginAuth(){
    return !!localStorage.getItem('token');
  }
  getLocationService():Promise<any>{
    return new Promise((resolve,reject)=>{
      navigator.geolocation.getCurrentPosition(resp=>{
        resolve({lng:resp.coords.longitude,lat:resp.coords.latitude})
      })
    })
  }
 

}
