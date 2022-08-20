import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PharmacyProfileService } from 'src/app/services/pharmacy-profile.service';

@Component({
  selector: 'app-pharmacy-owner-details',
  templateUrl: './pharmacy-owner-details.component.html',
  styleUrls: ['./pharmacy-owner-details.component.scss']
})
export class PharmacyOwnerDetailsComponent implements OnInit {

  
  loadingTitle:String="Loading...";
  isBlock:boolean =false;

  isShowToast:boolean =false;
  toastContent:string="";
  isToastTypeSuccess:boolean =true ;

  display: boolean = false;
  heading:string = "Upload Profile";
  selectedFile?: any;
  selectedImage?: string='No File selected';

  ngFirstName?:string;
  ngLastName?:string;
  ngEmail?:string;
  ngMobileNumber?:string;
  ngAddress?:string;

  registrationForm = new FormGroup({

    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNumber : new FormControl(),
    address : new FormControl(),
    
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
 

  constructor( private router: Router,    private service:PharmacyProfileService ) { }

  ngOnInit(): void {
   // this.ngFirstName ='Isuru';
  }
  onUpload() {
    this.display = true;
  }
  async onSaveAndNext(){
    
    this.isBlock=true;

    let data={
      FName:this.firstName?.value,
      LName:this.lastName?.value,
      Email:this.email?.value,
      MobileNumber:this.mobileNumber?.value,
      Address:this.address?.value,
      File:this.selectedFile.FileList[0]
     }

     this.service.pharmacyOwnerData(data)
     .subscribe(
       (val) => {
           this.isBlock=false;
       },
       response => {
           if(response.status == 200){
            this.isBlock=false;
            this.toastFunction("Pharmacy Owner Details added Succefully",true);
            this.router.navigateByUrl('/pharmacyDetails');
           }
           else{
             this.toastFunction("Customer login Faild",false);
             this.isBlock=false;
           }
       },
       () => {
           this.isBlock=false;
       });
  }

  onClear(){
    this.firstName?.reset();
    this.lastName?.reset();
    this.email?.reset();
    this.mobileNumber?.reset();
    this.address?.reset();
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
}
