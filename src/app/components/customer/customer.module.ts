import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {ButtonModule} from 'primeng/button';
import { MainWallpaperComponent } from './main-wallpaper/main-wallpaper.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { OnlineServicesComponent } from './online-services/online-services.component';
import { AboutPharmacyComponent } from './about-pharmacy/about-pharmacy.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import {SidebarModule} from 'primeng/sidebar';
import { CardSliderComponent } from './card-slider/card-slider.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { MedicineCardPrevComponent } from './medicine-card-prev/medicine-card-prev.component';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [CustomerViewComponent,NavBarComponent, MainWallpaperComponent, OnlineServicesComponent, AboutPharmacyComponent, FooterComponent, CardSliderComponent, PromotionsComponent, MedicineCardPrevComponent],
  imports: [
  CommonModule,
  ButtonModule,
  NgImageSliderModule,
  FormsModule,
  ReactiveFormsModule,
  SidebarModule,
  CardModule,
  ButtonModule,
  RatingModule,
  FormsModule,
  FileUploadModule,
  HttpClientModule
  
],
exports:[CustomerViewComponent,NavBarComponent]
})
export class CustomerModule { }
