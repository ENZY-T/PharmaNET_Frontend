import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlockUIModule} from 'primeng/blockui';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { LoadingUiComponent } from './loading-ui.component';


@NgModule({
  declarations: [LoadingUiComponent],
  imports: [
    CommonModule,
    BlockUIModule,
    ProgressSpinnerModule
  ],
  exports:[LoadingUiComponent],
})
export class LoadingUiModule { }
