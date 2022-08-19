import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prescription-upload',
  templateUrl: './prescription-upload.component.html',
  styleUrls: ['./prescription-upload.component.scss']
})
export class PrescriptionUploadComponent implements OnInit {

  display: boolean = false;
  selectedImage?: string='No File selected';
  selectedFile?: any;

  heading:string = "Upload Prescription";

  prescriptionUploadForm = new FormGroup({

    name : new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    contactNumber : new FormControl(),
   
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

  constructor() { }

  ngOnInit(): void {
  }
 async onSave(){
   // this.isBlock=true;
    let data={
      Name:this.name?.value,
      Email:this.email?.value,
      ContactNumber:this.contactNumber?.value,
    
      File:this.selectedFile
     }
    }
    onUpload() {
      this.display = true;
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
      this.selectedFile =file;
      this.selectedImage =file[0].name;
      }
    
    }
}
