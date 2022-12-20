import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-body',
  templateUrl: './landing-body.component.html',
  styleUrls: ['./landing-body.component.scss']
})
export class LandingBodyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  onLogin(){
    this.router.navigateByUrl('/registration');
  }
  
  onDisplayLocation(location:any){
    console.log(location);
  }
 
}
