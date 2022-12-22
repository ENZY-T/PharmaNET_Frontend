import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PharmacyProfileService } from 'src/app/services/pharmacy-profile.service';

@Component({
  selector: 'app-pharmacy-details',
  templateUrl: './pharmacy-details.component.html',
  styleUrls: ['./pharmacy-details.component.scss']
})
export class PharmacyDetailsComponent implements OnInit {

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
  
  loadName:String ="";
  loadAddress:String ="";
  loadEmail:String ="";
  loadNumber:String ="";
  loadAbout:String ="";
  latitude:String ="";
  longitude:String ="";
  isInitiated:boolean =false;

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


  constructor( private router: Router,    private service:PharmacyProfileService ) { }

  ngOnInit(): void {
    let pharmacyEmail =localStorage.getItem("SelectedPharmcyEmail");
    console.log(pharmacyEmail);
    let data={
      name: "string",
      email: pharmacyEmail
    }

    this.service.getSelectedPharmacy(data)
    .subscribe(
     (val) => {
         console.log("get pharmay  data");
         console.log(val);
        // this.dataAddress=val.address;
        this.loadName =val.name;
        this.loadAddress =val.address;
        this.loadEmail =val.email;
        this.loadNumber =val.contact_Number;
        this.loadAbout =val.about;
        console.log(val.address);
        this.isInitiated =true;

     },
     response => {
      console.log("get pharmay  data error2");
      this.isInitiated =false;
      // this.toastFunction("User registered Faild",false);
      
       //  console.log("POST call in error", response);
      //   this.isBlock=false;
     },
     () => {
      //console.log("get pharmay  data error1");
        // console.log("The POST observable is now completed.");
     });


    let isNavigateFromInventy =localStorage.getItem("navPharmacy");
    if(isNavigateFromInventy =="true"){
   //   this.saveBtn ="Save";
    }

  }

    
 


  onUpload() {
    this.display = true;
  }

  onDisplayLocation(location:any){
   
    this.latitude=location.latitude;
    this.longitude=location.longitude;
    console.log(this.latitude);
    console.log(this.longitude);
  }
  
  async onSave(){
  
    this.isBlock=true;
    let data={
      name:this.pharmacyName?.value,
      address:this.pharmacyAddress?.value,
      email:this.email?.value,
      contact_Number:this.contactNumber?.value,
      about:this.aboutCompany?.value,
      image:this.selectedFile,
      currentLatitude:this.latitude,
      currentLongitude:this.longitude
     }
     // set
     console.log(data);
     var formData: any = new FormData();
     formData.append('name', this.pharmacyName?.value);
     formData.append('address', this.pharmacyAddress?.value);
     formData.append('email', this.email?.value);
     formData.append('contact_Number', this.contactNumber?.value);
     formData.append('about', this.aboutCompany?.value);
     formData.append('image', this.selectedFile);
     formData.append('currentLatitude',this.latitude);
     formData.append('currentLongitude',this.longitude);

     //console.log("formData");
    // console.log(formData);

    if(this.isInitiated == false)
    {
      this.service.pharmacyDataPost(formData)
      .subscribe(
        (val) => {
            this.isBlock=false;
            this.toastFunction("Pharmacy Details added Succefully",true);
            console.log("p d g");
            console.log(val);
            this.onCheckInventy();
        },
        response => {
            if(response.status == 201){
             this.isBlock=false;
             this.onCheckInventy();
            
            }
            else{
              this.isBlock=false;
              this.toastFunction("Pharmacy Details added Faild",false);
            }
        },
        () => {
            this.isBlock=false;
        });
    }
    else{
      this.service.pharmacyDataPut(formData)
      .subscribe(
        (val) => {
            this.isBlock=false;
            this.toastFunction("Pharmacy Details Updated Succefully",true);
            console.log("p d g");
            console.log(val);
            this.onCheckInventy();
        },
        response => {
            if(response.status == 201){
             this.isBlock=false;
             this.onCheckInventy();
            
            }
            else{
              this.isBlock=false;
              this.toastFunction("Pharmacy Details Updated Faild",false);
            }
        },
        () => {
            this.isBlock=false;
        });
    }
  
       
  }

  onCheckInventy(){
  //  this.router.navigateByUrl('/pharma-dash');
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
