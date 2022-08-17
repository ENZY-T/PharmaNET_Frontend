import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyProfilePrevComponent } from './pharmacy-profile-prev/pharmacy-profile-prev.component';

@NgModule({
  declarations: [PharmacyProfilePrevComponent],
  imports: [
    CommonModule
  ],
  [exports]:[PharmacyProfilePrevComponent]
})
export class PharmacyProfileModule { }
