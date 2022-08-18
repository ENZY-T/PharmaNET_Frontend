import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import {ImageModule} from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToastUiModule } from '../toast-ui/toast-ui.module';



@NgModule({
  declarations: [
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    ImageModule,
    ButtonModule,
    DialogModule,
    ToastUiModule
  ],
  exports:[FileUploadComponent]
})
export class FileUploadModule { }
