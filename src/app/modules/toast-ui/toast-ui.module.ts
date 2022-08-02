import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastUiComponent } from './toast-ui.component';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [ToastUiComponent],
  imports: [
    CommonModule,
    ToastModule
  ],
  exports:[ToastUiComponent],

})
export class ToastUiModule { }
