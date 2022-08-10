import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine-card',
  templateUrl: './medicine-card.component.html',
  styleUrls: ['./medicine-card.component.scss']
})
export class MedicineCardComponent implements OnInit {

  ratingNumber: number = 0;
  uploadedFiles: any[] = [];
  name:String ='';
  price:number=0;

  fileName?:string;
  constructor() { }

  ngOnInit(): void {
  }
  
  onSave(){
    console.log(this.uploadedFiles.length)
    let data={
      image:this.uploadedFiles[0],
      name:this.name,
      price:this.price,
      rating:this.ratingNumber
     }
     console.log(data);
  

  }
  onCancel(){

  }
  onUpload(event:any) {
    console.log("upload");
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
}

myUploader(event:any, form:any){
  for(let file of event.files) {
      this.uploadedFiles.push(file);
  }
  form.clear();
}

onFileSelected(event:any) {

  const file:File = event.target.files[0];

  if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append("thumbnail", file);
      console.log(formData);
    
  }
}

}
