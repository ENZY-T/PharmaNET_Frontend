import { ReadVarExpr } from '@angular/compiler';
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
  image?: string='';

  constructor() { }

  ngOnInit(): void {

  }

  onSelectFile(file:any){
    if(file == 'delete'){
    this.selectedFile =[];
    this.selectedImage ='No File selected';
    }else{
    this.selectedFile =file[0];
    this.selectedImage =file[0].name;
    
    var reader =new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload=(event:any)=>{
        this.image = event.target.result;
        console.log(this.image);
      }
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
      image:this.image,
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
