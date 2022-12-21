import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { medCard } from 'src/app/models/med-card';
import { Cart, Product } from 'src/app/models/product';
import { PharmacyProfileService } from 'src/app/services/pharmacy-profile.service';



@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  selectedList: medCard[] = [];
  products: Product[] = [];
  cart: Cart[] = [];
  cartItem?: any;
  totalBIll?:Number=0;
  registrationForm = new FormGroup({

    itemName : new FormControl(''),
    quantity : new FormControl(''),


  })

  get itemName(){
    return this.registrationForm.get('itemName')
  }
  get quantity(){
    return this.registrationForm.get('quantity')
  }



  constructor( private router: Router,private service:PharmacyProfileService) { }

  ngOnInit(): void {

    this.getOwnerInventry();


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

  onAdd()
  {
    
    var quantityValue =Number( this.quantity?.value);
    var unitPriceValue=100;  
    this.cartItem={
      itemName:this.itemName?.value,
      quantity:this.quantity?.value,
      unitPrice: unitPriceValue,
      totalPrice: unitPriceValue*quantityValue

    }
    console.log(this.itemName?.value);
    console.log(this.quantity?.value);
    console.log(this.cartItem);
    this.totalBIll=this.totalBIll+this.cartItem.totalPrice;
    this.cart.push(this.cartItem);

  }

}
