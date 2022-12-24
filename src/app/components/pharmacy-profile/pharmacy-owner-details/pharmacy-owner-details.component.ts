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

  saveBtn:String ="Save";

  loadingTitle:String="Loading...";
  isBlock:boolean =false;

  isShowToast:boolean =false;
  toastContent:string="";
  isToastTypeSuccess:boolean =true ;

  display: boolean = false;
  heading:string = "Upload Profile";
  selectedFile?: any;
  selectedImage?: string='No File selected';

  ngFirstName:string='';
  ngLastName?:string;
  ngEmail?:string;
  
  ngMobileNumber?:string;
  ngAddress?:string;

  fName?:string='';
  lName?:string;
  ownerEmail?:string;

  loadName:String ="";
  loadAddress:String ="";
  loadEmail:String ="";
  loadNumber:String ="";
  loadAbout:String ="";


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
    console.log( "--------------owner" );
    let pharmacyEmail =localStorage.getItem("SelectedPharmcyEmail");

    
    console.log( this.ngFirstName );
    let data={
      name: "string",
      email: pharmacyEmail
    }

    this.service.getSelectedPharmacyOwner(data)
    .subscribe(
     (val) => {
        
        // this.dataAddress=val.address;
        this.ngFirstName =val.fName;
        this.ngLastName =val.lName;
        this.ngEmail =val.email;
        this.selectedImage =val.profilePictureUrl;

        this.loadAddress =val.address;

        this.ngMobileNumber =val.phoneNumber;
        this.loadAbout =val.about;
        console.log("Phamacy owner details");
        console.log(val);
        

     },
     response => {
      // this.toastFunction("User registered Faild",false);
      
       //  console.log("POST call in error", response);
      //   this.isBlock=false;
     },
     () => {
        // console.log("The POST observable is now completed.");
     });


    
    let fName = localStorage.getItem("FName");
    console.log(fName);
   // this.ngFirstName = "fName";
  //   this.lName=localStorage.getItem("LName");
  //  this.ownerEmail=localStorage.getItem("Email");
    let isNavigateFromInventy =localStorage.getItem("navOwner");
    if(isNavigateFromInventy =="true"){
     // this.saveBtn ="Save";
    }

   // this.ngFirstName ='Isuru';
  }
  onUpload() {
    this.display = true;
  }
  async onSaveAndNext(){
    
    this.isBlock=true;

    
    var ngFName = "";
    var ngLName = "";
    var ngEmail ="";
    var ngTelephone ="";
    var ngAddress ="";

    if(this.firstName?.value){
     ngFName =this.firstName?.value;
    }
    if(this.lastName?.value){
      ngLName =this.lastName?.value;
     }
    if(this.email?.value){
     ngEmail =this.email?.value;
    }
    if(this.mobileNumber?.value){
     ngTelephone =this.mobileNumber?.value;
    }
    if(this.address?.value){
      ngAddress =this.address?.value;
     }
     console.log("Image owner");
    console.log(this.selectedFile);
 
    const formData = new FormData();
 
    formData.append('FName', ngFName);
    formData.append('LName', ngLName);
    formData.append('Email', ngEmail);
    formData.append('phoneNumber', ngTelephone);
    formData.append('Address', ngAddress);
    formData.append('ProfilePicture',this.selectedFile);

     this.service.pharmacyOwnerData(formData)
     .subscribe(
       (val) => {
           this.isBlock=false;
           this.toastFunction("Pharmacy Owner Details Updated Succefully",true);
           this.onCheckInventy();
           console.log("Owner added data response");
           console.log(val);
       },
       response => {
           if(response.status == 201){
            this.isBlock=false;
            this.toastFunction("Pharmacy Owner Details Updated Succefully",true);
            this.onCheckInventy();
           }
           else{
             this.toastFunction("Pharmacy Owner Details Updated Failed",false);
             this.isBlock=false;
           }
       },
       () => {
           this.isBlock=false;
       });
  }

  onCheckInventy(){
  //  this.router.navigateByUrl('/pharmacyDetails');
    
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
    this.selectedFile =file[0];
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
