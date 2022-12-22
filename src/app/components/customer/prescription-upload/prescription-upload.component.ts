import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerServicesService } from 'src/app/services/customer-services.service';

@Component({
  selector: 'app-prescription-upload',
  templateUrl: './prescription-upload.component.html',
  styleUrls: ['./prescription-upload.component.scss']
})
export class PrescriptionUploadComponent implements OnInit {

   
  loadingTitle:String="Loading...";
  isBlock:boolean =false;

  isShowToast:boolean =false;
  toastContent:string="";
  isToastTypeSuccess:boolean =true ;
  

  display: boolean = false;
  selectedImage?: string='No File selected';
  selectedFile?: any;


  heading:string = "Upload Prescription";

  loadName:string|null="";
  loadEmail:string|null="";

  prescriptionUploadForm = new FormGroup({

    name : new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    contactNumber : new FormControl(''),
   
  })

  get name(){
    return this.prescriptionUploadForm.get('name')
  }
  get email(){
    return this.prescriptionUploadForm.get('email')
  }
  get contactNumber(){
    return this.prescriptionUploadForm.get('contactNumber')
  }

  constructor( private router: Router,  private service:CustomerServicesService) { }

  ngOnInit(): void {
    let name =localStorage.getItem("UserFullName");
    let email =localStorage.getItem("UserName");
    this.loadName =name;
    this.loadEmail =email;
  }
 async onSave(){
   this.isBlock=true;
    
   var ngName = "";
   var ngEmail ="";
   var ngTelephone ="";
   if(this.name?.value){
    ngName =this.name?.value;
   }
   if(this.contactNumber?.value){
    ngEmail =this.contactNumber?.value;
   }
   if(this.email?.value){
    ngTelephone =this.email?.value;
   }
   
   console.log(this.selectedFile);

   let name =localStorage.getItem("SelectedPharmcyEmail");
   const formData = new FormData();
   console.log(name);
  
  let lat=localStorage.getItem("latitude");
  let lng=localStorage.getItem("longitude");

   formData.append('Name', ngName);
   formData.append('Email', ngEmail);
   formData.append('Telephone', ngTelephone);
   formData.append('Prescription',this.selectedFile);
   formData.append('OwnerEmail',name?? '');
   formData.append('CurrentLatitude',lat?? '');
   formData.append('CurrentLongitude',lng?? '');

     console.log(formData);
     this.service.uploadPrescription(formData)
     .subscribe(
       (val) => {
        console.log("Prescription response");
          console.log(val);
           this.isBlock=false;
           this.toastFunction("Prescription Uploaded Succefully",true);
           this.onClear();
       },
       response => {
        console.log(response);
           if(response.status == 201){
            this.isBlock=false;
            this.toastFunction("Prescription Uploaded Succefully",true);
            this.onClear();
           }
           else{
            
             this.isBlock=false;
             this.toastFunction("Prescription Upload Faild",false);
           }
       },
       () => {
           this.isBlock=false;
       });

    }
    onUpload() {
      this.display = true;
    }

    onBack(){
      this.router.navigateByUrl('/customerView');

    }
    onClear(){
      this.name?.reset();
      this.email?.reset();
      this.contactNumber?.reset();
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
