import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { CartListComponent } from './components/customer/cart-list/cart-list.component';
import { CustomerViewComponent } from './components/customer/customer-view/customer-view.component';
import { ImageUploadComponent } from './components/customer/image-upload/image-upload.component';
import { LocationComponent } from './components/customer/location/location.component';
import { NavBarComponent } from './components/customer/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { MedicineCardComponent } from './components/home/medicine-card-edit/medicine-card.component';
import { MedicineCardPrevComponent } from './components/home/medicine-card-prev/medicine-card-prev.component';
import { PromotionsComponent } from './components/home/promotions/promotions.component';
import { PharmacyProfilePrevComponent } from './components/pharmacy-profile/pharmacy-profile-prev/pharmacy-profile-prev.component';
import { LocalizationComponent } from './modules/localization/localization.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'test', component: TestComponent },
  { path: 'changeLanguage', component: LocalizationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'medicineCard', component: MedicineCardComponent },
  { path: 'medicineCardPrev', component: MedicineCardPrevComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'customerView', component: CustomerViewComponent },
  { path: 'customerViewNavigationbar', component: NavBarComponent },
  { path: 'cartList', component: CartListComponent },
  { path: 'location', component: LocationComponent },
  { path: 'prescriptionUpload', component: ImageUploadComponent },
  { path: 'pharmacyProfile', component: PharmacyProfilePrevComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
