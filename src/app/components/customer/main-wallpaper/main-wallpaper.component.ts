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
      { id:1, name: 'Crestor ', price:2000,image:'https://png.pngtree.com/thumb_back/fh260/back_our/20200630/ourmid/pngtree-25d-simple-stylish-telemedicine-poster-background-image_341569.jpg',ratingNumber:2 },
      { id:2, name: 'Ventolin ', price:3000,image:'assets/wallpaper1.jpeg',ratingNumber:3 },
      { id:2, name: 'Ventolin ', price:3000,image:'https://us.123rf.com/450wm/aispl/aispl1202/aispl120200082/12487420-vector-molecule-medical-background-with-capsules.jpg?ver=6',ratingNumber:3 },
  ];
  }

}
