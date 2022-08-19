import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './components/auth/auth.module';
import { LoadingUiModule } from './modules/loading-ui/loading-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationbarModule } from './modules/navigationbar/navigationbar.module';
import { HomeModule } from './components/home/home.module';
import { CustomerModule } from './components/customer/customer.module';
import { MapModule } from './modules/map/map.module';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { PharmacyDashboardComponent } from './components/pharmacy-dashboard/pharmacy-dashboard.component';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CrudTableComponent } from './components/crud-table/crud-table.component';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { GalleriaModule } from 'primeng/galleria';
import { PharmacyProfileModule } from './components/pharmacy-profile/pharmacy-profile.module';
import { StepsModule } from 'primeng/steps';
import { PrescriptionListComponent } from './components/prescription-list/prescription-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PharmacyDashboardComponent,
    CrudTableComponent,
    PrescriptionListComponent,
  ],
  imports: [
    TagModule,
    ToastModule,
    InputNumberModule,
    RadioButtonModule,
    DropdownModule,
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
    ToolbarModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    FormsModule,
    GalleriaModule,
    PharmacyProfileModule,
    StepsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
