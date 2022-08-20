import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {


  @Input() display: boolean = false;
  @Input() heading: string = "Upload File";
  @Output() public displayEmit = new EventEmitter();
  @Output() public fileEmit = new EventEmitter();

  isShowToast:boolean =false;
  toastContent:string="";
  isToastTypeSuccess:boolean =true ;

  baseImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzcEuDSD5CiA2L2-T_i_JJ1rErInY7NjFi-AARAxc1q_D8k8scfZu8fT7M2fGNBj4iiHI&usqp=CAU";
  currentImage=this.baseImage;

  uploadedFiles: any[] = [];
  selectedFile?: any;
  constructor() { }

  ngOnInit(): void {
  }
  onSelectFile(e:any){
    if(e.target.files){
     this.selectedFile =e.target.files;
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload =(event:any) =>{
        this.currentImage =event.target.result;
      }
    }
  }
  onUpload(){
    // console.log(this.selectedFile[0].name);
    this.fileEmit.emit(this.selectedFile);
    this.onClose();
    this.currentImage =this.baseImage;
    this.toastFunction("File Selected successfully",true);


  }
  onRemoveImage(){
    this.fileEmit.emit('delete');
    this.currentImage =this.baseImage;
    this.onClose();
  }

 
  onClose(){
    this.display =false;
    this.displayEmit.emit(this.display);
    this.currentImage =this.baseImage;

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
