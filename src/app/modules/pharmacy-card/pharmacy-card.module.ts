import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyCardComponent } from './pharmacy-card.component';



@NgModule({
  declarations: [PharmacyCardComponent],
  imports: [
    CommonModule
  ],
  exports:[PharmacyCardComponent]
})
export class PharmacyCardModule { }
