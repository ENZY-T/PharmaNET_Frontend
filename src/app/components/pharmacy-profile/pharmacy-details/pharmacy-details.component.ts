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

  
  loadingTitle:String="Loading...";
  isBlock:boolean =false;

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


  constructor( private router: Router,    private service:PharmacyProfileService ) { }

  ngOnInit(): void {

  }
  onUpload() {
    this.display = true;
  }
  async onSave(){
    // ar ngName = "";
    // var ngEmail ="";
    // var ngTelephone ="";
    // var ngAddress ="";
    // var ngAbout ="";

    // if(this.pharmacyName?.value){
    //   ngName =this.pharmacyName?.value;
    //  }
    // if(this.email?.value){
    //  ngEmail =this.email?.value;
    // }
    // if(this.contactNumber?.value){
    //  ngTelephone =this.contactNumber?.value;
    // }
    // if(this.pharmacyAddress?.value){
    //   ngAddress =this.pharmacyAddress?.value;
    //  }
    //  if(this.aboutCompany?.value){
    //   ngAbout =this.aboutCompany?.value;
    //  }
  
    // const formData = new FormData();
 
    // formData.append('name', ngName);
    // formData.append('email', ngEmail);
    // formData.append('contact_Number', ngTelephone);
    // formData.append('address', ngAddress);
    // formData.append('about',ngAbout);

    this.isBlock=true;
    let data={
      name:this.pharmacyName?.value,
      address:this.pharmacyAddress?.value,
      email:this.email?.value,
      contact_Number:this.contactNumber?.value,
      about:this.aboutCompany?.value,
     // File:this.selectedFile
     }

     this.service.pharmacyData(data)
     .subscribe(
       (val) => {
           this.isBlock=false;
           this.toastFunction("Pharmacy Details added Succefully",true);
           this.router.navigateByUrl('/pharma-dash');
       },
       response => {
           if(response.status == 200){
            this.isBlock=false;
            this.toastFunction("Pharmacy Details added Succefully",true);
            this.router.navigateByUrl('/pharma-dash');
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
