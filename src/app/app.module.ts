import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './components/auth/auth.module';
import { LoadingUiModule } from './modules/loading-ui/loading-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';
import { NavigationbarModule } from './modules/navigationbar/navigationbar.module';

//translate dependencies
// import { HttpClient } from '@angular/common/http';
// import { TranslateModule ,TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// export function HttpLoaderFactory(http:HttpClient){
//   return new TranslateHttpLoader(http);
// }
@NgModule({
  declarations: [
    AppComponent,
    TestComponent
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    LoadingUiModule,
    ReactiveFormsModule,
    NavigationbarModule,
    
    // TranslateModule.forRoot(
    //   { loader:{
    //      provide: TranslateLoader,
    //      useFactory: HttpLoaderFactory,
    //      deps:[HttpClient]
    //    }
    //  }
    //  )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
