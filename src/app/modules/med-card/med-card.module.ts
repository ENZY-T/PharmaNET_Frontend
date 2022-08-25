import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedCardComponent } from './med-card/med-card.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    MedCardComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    FormsModule,
    BadgeModule,
    ButtonModule
  ],
  exports:[MedCardComponent],
})
export class MedCardModule { }
