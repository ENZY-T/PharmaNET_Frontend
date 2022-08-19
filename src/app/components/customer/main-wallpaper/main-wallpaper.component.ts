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
      { id:0, name: 'Synthroid ', price:1000,image:'https://img.freepik.com/premium-photo/doctor-working-hospital-healthcare-medical-service_31965-1049.jpg?w=2000',ratingNumber:3 },
      { id:1, name: 'Crestor ', price:2000,image:'https://agshovpharma.com/wp-content/uploads/2019/06/inner_banner.jpg',ratingNumber:2 },
      { id:2, name: 'Ventolin ', price:3000,image:'https://www.unionchemistspharmacy.lk/wp-content/uploads/2022/07/pharmacy.jpg',ratingNumber:3 },
  ];
  }

}
