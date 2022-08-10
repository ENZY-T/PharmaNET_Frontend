import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {ButtonModule} from 'primeng/button';
import { MainWallpaperComponent } from './main-wallpaper/main-wallpaper.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { OnlineServicesComponent } from './online-services/online-services.component';

@NgModule({
  declarations: [CustomerViewComponent,NavBarComponent, MainWallpaperComponent, OnlineServicesComponent],
  imports: [
  CommonModule,
  ButtonModule,
  NgImageSliderModule
],
exports:[CustomerViewComponent,NavBarComponent]
})
export class CustomerModule { }
