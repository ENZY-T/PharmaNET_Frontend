import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pharmacy-details',
  templateUrl: './pharmacy-details.component.html',
  styleUrls: ['./pharmacy-details.component.scss']
})
export class PharmacyDetailsComponent implements OnInit {
  display: boolean = false;
  heading:string = "Upload Profile";
  selectedFile?: any;
  selectedImage?: string='No File selected';

  registrationForm = new FormGroup({

    pharmacyName : new FormControl(''),
    pharmacyAddress : new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    contactNumber : new FormControl(),
    aboutCompany : new FormControl(),
    pharmacyLogo : new FormControl(),
    
  })

  get pharmacyName(){
    return this.registrationForm.get('pharmacyName')
  }
  get pharmacyAddress(){
    return this.registrationForm.get('pharmacyAddress')
  }
  get email(){
    return this.registrationForm.get('email')
  }
  get contactNumber(){
    return this.registrationForm.get('contactNumber')
  }
  get aboutCompany(){
    return this.registrationForm.get('aboutCompany')
  }
  get pharmacyLogo(){
    return this.registrationForm.get('pharmacyLogo')
  }
 

  constructor() { }

  ngOnInit(): void {
  }
  onUpload() {
    this.display = true;
  }
  onSave(){
    let data={
      PharmacyName:this.pharmacyName?.value,
      LName:this.pharmacyAddress?.value,
      Email:this.email?.value,
      ContactNumber:this.contactNumber?.value,
      AboutCompany:this.aboutCompany?.value,
      PhamacyLogo:this.pharmacyLogo?.value,
      File:this.selectedFile
     }
     console.log(data);
  }
  onSelectFile(file:any){
    if(file == 'delete'){
    this.selectedFile =[];
    this.selectedImage ='No File selected';
    }else{
    this.selectedFile =file;
    this.selectedImage =file[0].name;
    }
    

  }
}
