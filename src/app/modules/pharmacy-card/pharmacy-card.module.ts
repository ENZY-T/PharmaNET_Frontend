import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyCardComponent } from './pharmacy-card.component';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PharmacyCardComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RatingModule,
    FormsModule
    
  ],
  exports:[PharmacyCardComponent]
})
export class PharmacyCardModule { }
