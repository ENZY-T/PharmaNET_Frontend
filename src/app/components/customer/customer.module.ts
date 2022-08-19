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
import {CarouselModule} from 'primeng/carousel';
import { ToastUiModule } from 'src/app/modules/toast-ui/toast-ui.module';
import { CartListComponent } from './cart-list/cart-list.component';
import {OrderListModule} from 'primeng/orderlist';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { LocationComponent } from './location/location.component';
import { MapModule } from 'src/app/modules/map/map.module';
import { FileUploadModule } from 'src/app/modules/file-upload/file-upload.module';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import {DialogModule} from 'primeng/dialog';
import {GalleriaModule} from 'primeng/galleria';
import { PrescriptionUploadComponent } from './prescription-upload/prescription-upload.component';

@NgModule({
  declarations: [CustomerViewComponent,NavBarComponent, MainWallpaperComponent, OnlineServicesComponent, AboutPharmacyComponent, FooterComponent, CardSliderComponent, PromotionsComponent, MedicineCardPrevComponent, CartListComponent, LocationComponent, ImageUploadComponent, PrescriptionUploadComponent],
  imports: [
  CommonModule,
  ButtonModule,
  NgImageSliderModule,
  FormsModule,
  ReactiveFormsModule,
  SidebarModule,
  CardModule,
  RatingModule,
  FormsModule,
  FileUploadModule,
  HttpClientModule,
  CarouselModule,
  ToastUiModule,
  OrderListModule,
  AvatarModule,
  AvatarGroupModule,
  MapModule,
  DialogModule,
  GalleriaModule
  
  
],
exports:[CustomerViewComponent,NavBarComponent]
})
export class CustomerModule { }
