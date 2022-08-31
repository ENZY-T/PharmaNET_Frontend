import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingBodyComponent } from './landing-body/landing-body.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    LandingPageComponent,
    LandingNavbarComponent,
    FooterComponent,
    LandingBodyComponent,
    
    
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports:[LandingNavbarComponent,LandingPageComponent]
})
export class LandingModule { }
