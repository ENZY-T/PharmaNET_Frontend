import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingBodyComponent } from './landing-body/landing-body.component';
import { ButtonModule } from 'primeng/button';
import { PharmacyCardModule } from 'src/app/modules/pharmacy-card/pharmacy-card.module';
import { PharmacyListComponent } from './pharmacy-list/pharmacy-list.component';
import { CarouselModule } from 'primeng/carousel';
import { FormsModule } from '@angular/forms';
import { LocalizationModule } from 'src/app/modules/localization/localization.module';
import {CheckboxModule} from 'primeng/checkbox';



@NgModule({
  declarations: [
    LandingPageComponent,
    LandingNavbarComponent,
    FooterComponent,
    LandingBodyComponent,
    PharmacyListComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PharmacyCardModule,
    CarouselModule,
    FormsModule,
    LocalizationModule,
    CheckboxModule
    
    ],
  exports:[LandingNavbarComponent,LandingPageComponent]
})
export class LandingModule { }
