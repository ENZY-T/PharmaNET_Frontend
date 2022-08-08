import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineCardComponent } from './medicine-card/medicine-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [MedicineCardComponent, DashboardComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule

  ],
  exports:[MedicineCardComponent,DashboardComponent],
})
export class HomeModule { }
