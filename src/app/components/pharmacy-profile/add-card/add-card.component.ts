import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { medCard } from 'src/app/models/med-card';
import { PharmacyProfileService } from 'src/app/services/pharmacy-profile.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  medicineCards: any[] = [];
  userEmail?:string;

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

  loadingTitle:String="Loading...";
  isBlock:boolean =false;
  
  isShowToast:boolean =false;
  toastContent:string="";
  isToastTypeSuccess:boolean =true ;

  constructor(private service:PharmacyProfileService) { }

  ngOnInit(): void {
    this.getMedCardsArray();
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
    this.isBlock=true;

    let user =localStorage.getItem("UserName");
  
    let data={
      name:this.itemName?.value,
      price:this.newPrice?.value,
      prevPrice:this.oldPrice?.value,
      ratingNumber:this.rating?.value,
      discount:this.discount?.value,
      image:this.selectedFile,
      email:user
     }
     console.log(data);

     const formData = new FormData();

     formData.append('name', this.itemName?.value ?? '');
     formData.append('price', this.newPrice?.value ?? '');
     formData.append('prevPrice',this.oldPrice?.value ?? '');
     formData.append('ratingNumber', this.rating?.value ?? '');
     formData.append('discount',this.discount?.value?? '');
     formData.append('image', this.selectedFile ?? '');
     formData.append('email', user?? '');

     //array push
    // this.medicineCards.push(data);
     console.log(formData);

     this.service.saveMedCards(formData)
     .subscribe(
       (val) => {
         console.log("medCards");
         this.getMedCardsArray();
         console.log(val);
         this.toastFunction("Card Added successfully",true);
         this.isBlock=false;
        
          
       },
       response => {
       
          console.log("response.body");
           console.log(response.status);

           if(response.status == 201){
            this.toastFunction("Card Added Successfully",false);

           }
           else{
             this.toastFunction("Card Added Faild",false);
             this.isBlock=false;
           }
       },
       () => {
         // console.log("The POST observable is now completed.");
       });


     

     this.onClear();
  } 
  
  getMedCardsArray(){
    let pharmacyOwnerEmail =localStorage.getItem("UserName");
    let data={
      email:pharmacyOwnerEmail
    }
    this.service.getMedCards(data)
    .subscribe(
      (val) => {
        console.log("medCards received");
        console.log(val);
        this.medicineCards =val;
        this.isBlock=false;
       
         
      },
      response => {

         console.log("response.body");
       //   console.log(response.status)
          if(response.status == 200){
            console.log("200");
          }
          else{
            console.log("Erro");
            this.isBlock=false;
          }
      },
      () => {
        // console.log("The POST observable is now completed.");
      });


  }
  async toastFunction(title:string,isSuccess:boolean){
    this.toastContent= title;
    this.isToastTypeSuccess =isSuccess;
    await this.delay(0);
    this.isShowToast=true;
    await this.delay(0);
    this.isShowToast=false;
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
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
