import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import {ImageModule} from 'primeng/image';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    ImageModule,
    ButtonModule
  ],
  exports:[FileUploadComponent]
})
export class FileUploadModule { }
