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
    
    ],
  exports:[LandingNavbarComponent,LandingPageComponent]
})
export class LandingModule { }
