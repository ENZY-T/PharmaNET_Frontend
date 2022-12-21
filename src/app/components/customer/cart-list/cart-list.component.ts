import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { medCard } from 'src/app/models/med-card';
import { Product } from 'src/app/models/product';
import { PharmacyProfileService } from 'src/app/services/pharmacy-profile.service';



@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  selectedList: medCard[] = [];
  products: Product[] = [];
  constructor( private router: Router,private service:PharmacyProfileService) { }

  ngOnInit(): void {

    this.getOwnerInventry();
  //   this.selectedList = [
  //     { id:0, name: 'Synthroid', discount:20, isSelect:false,  price:1000, prevPrice:1500, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:3 },
  //     { id:1, name: 'Crestor',   discount:35,   isSelect:false,  price:2000,prevPrice:2300, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/7/3/735334_1.jpg',ratingNumber:2 },
  //     { id:2, name: 'Ventolin',  discount:34,  isSelect:false,  price:3000,prevPrice:3400, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/8/183804_1.jpg',ratingNumber:3 },
  //     { id:3, name: 'Nexium',    discount:12,   isSelect:false,  price:4000,prevPrice:4200, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:2 },
  //     { id:4, name: 'Solostar',  discount:28,  isSelect:false,  price:3000, prevPrice:3600,image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/8/183804_1.jpg',ratingNumber:3 },
  //     { id:5, name: 'Diskus ',   discount:10,  isSelect:false,  price:4000, prevPrice:4100, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:2 }

  // ];

  }
  onBack(){
    this.router.navigateByUrl('/customerView');

  }

  getOwnerInventry() {
    let pharmacyOwnerEmail =localStorage.getItem("UserName");
   
    var formData: any = new FormData();
    formData.append('email', pharmacyOwnerEmail);
    this.service.getOwnerInventry(formData)
    .subscribe(
      (val) => {
        console.log("inventry received");
        console.log(val);
        this.products =val;
 
      },
      response => {
         console.log(response);

         console.log("response.body");
       //   console.log(response.status)
          if(response.status == 200){
            console.log("inventry received");
            console.log(response);
            this.products =response;
          }
          else{
           
           
          }
      },
      () => {
        // console.log("The POST observable is now completed.");
      });

    
  }

}
