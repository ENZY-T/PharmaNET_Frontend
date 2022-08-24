import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    LandingNavbarComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports:[LandingNavbarComponent,LandingPageComponent]
})
export class LandingModule { }
