import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineCardComponent } from './medicine-card-edit/medicine-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { MedicineCardPrevComponent } from './medicine-card-prev/medicine-card-prev.component';
import { PromotionsComponent } from './promotions/promotions.component';

@NgModule({
  declarations: [MedicineCardComponent, DashboardComponent, MedicineCardPrevComponent, PromotionsComponent,PromotionsComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule

  ],
  exports:[MedicineCardComponent,DashboardComponent,MedicineCardPrevComponent,PromotionsComponent
  ],
})
export class HomeModule { }
