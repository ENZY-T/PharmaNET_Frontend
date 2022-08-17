import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  baseImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzcEuDSD5CiA2L2-T_i_JJ1rErInY7NjFi-AARAxc1q_D8k8scfZu8fT7M2fGNBj4iiHI&usqp=CAU";
  currentImage=this.baseImage;

  uploadedFiles: any[] = [];
  selectedFile?: any;
  constructor() { }

  ngOnInit(): void {
  }
  onSelectFile(e:any){
    if(e.target.files){
      this.selectedFile=e.target.files;
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload =(event:any) =>{
        this.currentImage =event.target.result;
      }
    }
  }
  onUpload(){
    console.log(this.selectedFile);
    console.log(this.selectedFile[0].name);
  }
  onClearImage(){
    this.currentImage =this.baseImage;
  }

}
