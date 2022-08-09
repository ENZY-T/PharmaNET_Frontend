import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { LoadingUiModule } from 'src/app/modules/loading-ui/loading-ui.module';
 import { ToastUiModule } from 'src/app/modules/toast-ui/toast-ui.module';
import { ToastModule } from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RadioButtonModule} from 'primeng/radiobutton';
//translate dependencies
import { HttpClient } from '@angular/common/http';
import { TranslateModule ,TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RegistrationComponent } from './registration/registration.component';
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [LoginComponent, SignupComponent, RegistrationComponent],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    FormsModule,
    HttpClientModule,
    LoadingUiModule,
    ToastUiModule,
    BrowserAnimationsModule,
    RippleModule,
    ToastModule,
    ReactiveFormsModule,
    RadioButtonModule,
  

    TranslateModule.forRoot(
      { loader:{
         provide: TranslateLoader,
         useFactory: HttpLoaderFactory,
         deps:[HttpClient]
       }
     }
     )
  ],
  exports:[LoginComponent],

})
export class AuthModule { }
