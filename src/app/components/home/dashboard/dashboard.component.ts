import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthorizationsService } from 'src/app/services/authorizations.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  @Output() public locationEmit = new EventEmitter();
  longitude?:Float32Array;
  latitude?:Float32Array;
  constructor(private services:AuthorizationsService) { }

  ngOnInit(): void {
    this.services.getLocationService().then(resp=>{
      this.longitude =resp.lng;
      this.latitude =resp.lat;
      console.log(this.longitude);
      console.log(this.latitude);
    })
    let locationVal={
      longitude : this.longitude,
      latitude :this.latitude,

    }
    this.locationEmit.emit(locationVal);
  }

  getLocation(){
    this.services.getLocationService().then(resp=>{
      console.log(resp.lng);
      console.log(resp.lat);
      
    })
  }
  
}
