import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './components/auth/auth.module';
import { LoadingUiModule } from './modules/loading-ui/loading-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';
import { NavigationbarModule } from './modules/navigationbar/navigationbar.module';
import { HomeModule } from './components/home/home.module';
import { CustomerModule } from './components/customer/customer.module';
import { MapModule } from './modules/map/map.module';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {ImageModule} from 'primeng/image';
import {CardModule} from 'primeng/card';
import {GalleriaModule} from 'primeng/galleria';


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
    HomeModule,
    MapModule,
    FileUploadModule,
    HttpClientModule,
    InputTextModule,
    ImageModule,
    CardModule,
    GalleriaModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
