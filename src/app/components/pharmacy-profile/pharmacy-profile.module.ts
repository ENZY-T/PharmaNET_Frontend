import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PharmacyProfilePrevComponent } from './pharmacy-profile-prev/pharmacy-profile-prev.component';
import { PharmacyDetailsComponent } from './pharmacy-details/pharmacy-details.component';
import { PharmacyOwnerDetailsComponent } from './pharmacy-owner-details/pharmacy-owner-details.component';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [PharmacyProfilePrevComponent,PharmacyDetailsComponent, PharmacyOwnerDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  exports:[PharmacyProfilePrevComponent,PharmacyDetailsComponent]
})
export class PharmacyProfileModule { }
