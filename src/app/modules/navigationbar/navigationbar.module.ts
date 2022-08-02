import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationbarComponent } from './navigationbar.component';
import { LocalizationModule } from '../localization/localization.module';


@NgModule({
  declarations: [NavigationbarComponent],
  imports: [
    CommonModule,
    LocalizationModule
  ],
  exports:[NavigationbarComponent],

})
export class NavigationbarModule { }
