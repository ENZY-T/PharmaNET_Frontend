import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-wallpaper',
  templateUrl: './main-wallpaper.component.html',
  styleUrls: ['./main-wallpaper.component.scss']
})
export class MainWallpaperComponent implements OnInit {

  wallpapers: any[] = [];

  constructor() { }

  ngOnInit(): void {

    this.wallpapers = [
      { id:0,image:'https://img.freepik.com/premium-photo/doctor-working-hospital-healthcare-medical-service_31965-1049.jpg?w=2000'},
      { id:1,image:'https://img.freepik.com/premium-photo/pharmacist-holding-medicine-bottle-computer-tablet-filling-prescription-pharmacy-drugstore_67340-475.jpg?w=996'},
      { id:2,image:'https://img.freepik.com/free-vector/medical-science-banner-blue-color-shade_1017-24286.jpg?w=826&t=st=1660935219~exp=1660935819~hmac=1e730863da414208c04b1fed917ee0cccf907816376a491f99e5f48f7b82827b'},
      { id:3,image:'https://img.freepik.com/premium-photo/medicine-doctor-holding-color-capsule-pill-hand-with-icon-medical-network-connection-medical-technology-network-concept_34200-324.jpg?w=826' },
      { id:4,image:'https://img.freepik.com/premium-photo/multicolored-pills-hand-blue-panorama-background_446633-4638.jpg?w=826' },
      { id:5,image:'https://img.freepik.com/free-vector/healthcare-medical-blue-background-banner_1017-20041.jpg?w=826&t=st=1660935276~exp=1660935876~hmac=c7676a339bdac8c53c5d6f4433096dc8d25297a6c0b8694c0bb3f8eabeec94e7' },
      { id:6,image:'https://img.freepik.com/premium-photo/medicine-doctor-hold-medical-cross-icon-healthcare-network-innovation-healthcare-technology_34200-496.jpg?w=826' },

    ];
  }

}
