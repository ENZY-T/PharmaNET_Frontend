import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.scss']
})
export class LandingNavbarComponent implements OnInit {

  isLogOrReg:boolean=false;
  user:String="";
  constructor() { }

  ngOnInit(): void {
    let currentUser =localStorage.getItem("UserFullName");
    if(currentUser){
      this.isLogOrReg =true;
      this.user =currentUser;

    }
  }

   onLogOut(){
    console.log("click");
    this.isLogOrReg =false;
    localStorage.removeItem("UserName");
    localStorage.removeItem("UserFullName");
   }
}
