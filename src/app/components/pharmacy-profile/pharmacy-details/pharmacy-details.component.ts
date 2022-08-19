import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmacy-details',
  templateUrl: './pharmacy-details.component.html',
  styleUrls: ['./pharmacy-details.component.scss']
})
export class PharmacyDetailsComponent implements OnInit {

  isShowToast:boolean =false;
  toastContent:string="";
  isToastTypeSuccess:boolean =true ;

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


  constructor( private router: Router) { }

  ngOnInit(): void {
    this.toastFunction("Pharmacy Owner Details added Succefully",true);

  }
  onUpload() {
    this.display = true;
  }
  onSave(){
    this.toastFunction("Pharmacy Details added Succefully",true);
    let data={
      PharmacyName:this.pharmacyName?.value,
      LName:this.pharmacyAddress?.value,
      Email:this.email?.value,
      ContactNumber:this.contactNumber?.value,
      AboutCompany:this.aboutCompany?.value,
      File:this.selectedFile
     }
     console.log(data);
  }
  onClear(){
    this.pharmacyName?.reset();
    this.pharmacyAddress?.reset();
    this.email?.reset();
    this.contactNumber?.reset();
    this.aboutCompany?.reset();
    this.selectedImage =''

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
  onBack(){
    this.router.navigateByUrl('/pharmacyProfile');

  }
}
