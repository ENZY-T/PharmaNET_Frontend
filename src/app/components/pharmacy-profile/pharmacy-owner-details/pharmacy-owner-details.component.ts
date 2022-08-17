import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pharmacy-owner-details',
  templateUrl: './pharmacy-owner-details.component.html',
  styleUrls: ['./pharmacy-owner-details.component.scss']
})
export class PharmacyOwnerDetailsComponent implements OnInit {

  display: boolean = false;
  heading:string = "Upload Profile";
  selectedFile?: any;
  selectedImage?: string='No File selected';

  registrationForm = new FormGroup({

    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNumber : new FormControl(),
    address : new FormControl(),
    profile : new FormControl(),
    
  })

  get firstName(){
    return this.registrationForm.get('firstName')
  }
  get lastName(){
    return this.registrationForm.get('lastName')
  }
  get email(){
    return this.registrationForm.get('email')
  }
  get mobileNumber(){
    return this.registrationForm.get('mobileNumber')
  }
  get address(){
    return this.registrationForm.get('address')
  }
  get profile(){
    return this.registrationForm.get('profile')
  }
 

  constructor() { }

  ngOnInit(): void {
  }
  onUpload() {
    this.display = true;
  }
  onSave(){
    let data={
      FName:this.firstName?.value,
      LName:this.lastName?.value,
      Email:this.email?.value,
      MobileNumber:this.mobileNumber?.value,
      Address:this.address?.value,
      Profile:this.profile?.value,
      File:this.selectedFile
     }
     console.log(data);
  }
  onSelectFile(file:any){
    this.selectedFile =file;
    this.selectedImage =file[0].name;
  }
}
