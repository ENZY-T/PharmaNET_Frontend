import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-services',
  templateUrl: './online-services.component.html',
  styleUrls: ['./online-services.component.scss']
})
export class OnlineServicesComponent implements OnInit {

  display: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  showDialog() {
    this.display = true;
  }

}
