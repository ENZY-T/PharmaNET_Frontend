import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-wallpaper',
  templateUrl: './main-wallpaper.component.html',
  styleUrls: ['./main-wallpaper.component.scss']
})
export class MainWallpaperComponent implements OnInit {

  imageObject: any[] = [];

  constructor() { }

  ngOnInit(): void {

    this.imageObject = [{
      image: 'https://thumbs.dreamstime.com/b/doctor-medical-background-24834402.jpg',
      thumbImage: 'https://thumbs.dreamstime.com/b/doctor-medical-background-24834402.jpg',
      alt: 'alt of image',
      title: 'title of image'
  },
   {
      image: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
      thumbImage: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
      title: 'Image title', //Optional: You can use this key if want to show image with title
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  }
];
  }

}
