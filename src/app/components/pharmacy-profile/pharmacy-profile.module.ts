import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PharmacyDetailsComponent } from './pharmacy-details/pharmacy-details.component';
import { PharmacyOwnerDetailsComponent } from './pharmacy-owner-details/pharmacy-owner-details.component';
import {InputTextModule} from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'src/app/modules/file-upload/file-upload.module';
import { ButtonModule } from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ToastUiModule } from 'src/app/modules/toast-ui/toast-ui.module';
import { LoadingUiModule } from 'src/app/modules/loading-ui/loading-ui.module';
import { AddCardComponent } from './add-card/add-card.component';
import { MedCardModule } from 'src/app/modules/med-card/med-card.module';


@NgModule({
  declarations: [PharmacyDetailsComponent, PharmacyOwnerDetailsComponent, AddCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DialogModule,
    FileUploadModule,
    ButtonModule,
    InputTextareaModule,
    ToastUiModule,
    LoadingUiModule,
    MedCardModule
  ],
  exports:[PharmacyDetailsComponent]
})
export class PharmacyProfileModule { }
