import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {ButtonModule} from 'primeng/button';
import { MainWallpaperComponent } from './main-wallpaper/main-wallpaper.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { OnlineServicesComponent } from './online-services/online-services.component';
import { HomeModule } from '../home/home.module';
import { AboutPharmacyComponent } from './about-pharmacy/about-pharmacy.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import {SidebarModule} from 'primeng/sidebar';
import { CardSliderComponent } from './card-slider/card-slider.component';

@NgModule({
  declarations: [CustomerViewComponent,NavBarComponent, MainWallpaperComponent, OnlineServicesComponent, AboutPharmacyComponent, FooterComponent, CardSliderComponent],
  imports: [
  CommonModule,
  ButtonModule,
  NgImageSliderModule,
  HomeModule,
  FormsModule,
  ReactiveFormsModule,
  SidebarModule
  
],
exports:[CustomerViewComponent,NavBarComponent]
})
export class CustomerModule { }
