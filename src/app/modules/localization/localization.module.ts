import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule ,TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LocalizationComponent } from './localization.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [LocalizationComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(
      { loader:{
         provide: TranslateLoader,
         useFactory: HttpLoaderFactory,
         deps:[HttpClient]
       }
 
     }
     )
  ],
  exports:[LocalizationComponent],

})
export class LocalizationModule { }
