import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { medCard } from 'src/app/models/med-card';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  medicineCards: any[] = [];
  

  cardForm = new FormGroup({

    itemName : new FormControl(''),
    newPrice : new FormControl(''),
    oldPrice : new FormControl(),
    discount : new FormControl(),
    rating : new FormControl(),
  })

  get itemName(){
    return this.cardForm.get('itemName')
  }
  get newPrice(){
    return this.cardForm.get('newPrice')
  }
 
  get oldPrice(){
    return this.cardForm.get('oldPrice')
  }
  get discount(){
    return this.cardForm.get('discount')
  }

  get rating(){
    return this.cardForm.get('rating')
  }

   display: boolean = false;
  heading:string = "Upload Profile";
  selectedFile?: any;
  selectedImage?: string='No File selected';


  constructor() { }

  ngOnInit(): void {
    this.medicineCards = [
      { id:0, name: 'Synthroid', discount:20, isSelect:false,  price:1000, prevPrice:1500, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:3 },
      { id:1, name: 'Crestor',   discount:35,   isSelect:false,  price:2000,prevPrice:2300, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/7/3/735334_1.jpg',ratingNumber:2 },
      { id:2, name: 'Ventolin',  discount:34,  isSelect:false,  price:3000,prevPrice:3400, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/8/183804_1.jpg',ratingNumber:3 },
      { id:3, name: 'Nexium',    discount:12,   isSelect:false,  price:4000,prevPrice:4200, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:2 },
      { id:4, name: 'Solostar',  discount:28,  isSelect:false,  price:3000, prevPrice:3600,image:'https://www.healthguard.lk/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/8/183804_1.jpg',ratingNumber:3 },
      { id:5, name: 'Diskus ',   discount:10,  isSelect:false,  price:4000, prevPrice:4100, image:'https://www.healthguard.lk/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/r/ervenin_presoil_1.jpg',ratingNumber:2 }

  ];
  }

  onSelectFile(file:any){
    if(file == 'delete'){
    this.selectedFile =[];
    this.selectedImage ='No File selected';
    }else{
    this.selectedFile =file[0];
    this.selectedImage =file[0].name;
    }
  
  }
  onUpload() {
    this.display = true;
  }
  onSave(){


    
    let data={
      name:this.itemName?.value,
      price:this.newPrice?.value,
      prevPrice:this.oldPrice?.value,
      ratingNumber:this.rating?.value,
      discount:this.discount?.value,
      isSelect:false,
      Image:"",
      File:this.selectedFile
     }
    
     console.log(data);
    

     this.medicineCards.push(data);
     console.log(this.medicineCards);
     this.onClear();
  } 
  
  onClear(){
    this.itemName?.reset();
    this.newPrice?.reset();
    this.oldPrice?.reset();
    this.discount?.reset();
    this.rating?.reset();
    this.selectedImage =''
  }
  onAdd(event:any){
    
  }
}
