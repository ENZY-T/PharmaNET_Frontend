import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  cutomerData:any[]=[];
  constructor() { }

  ngOnInit(): void {
    this.cutomerData =[{
      'address':'1010 Avenue, sw 54321, chandigarh',
      'contactNumber':'98765432100',
      'email':'abcmail@info.com'
    }]
  }

}
