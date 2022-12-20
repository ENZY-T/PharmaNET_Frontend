import { Component, OnInit } from '@angular/core';
import { AuthorizationsService } from 'src/app/services/authorizations.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private services:AuthorizationsService) { }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation(){
    this.services.getLocationService().then(resp=>{
      console.log(resp.lng);
      console.log(resp.lat);
    })
  }
}
