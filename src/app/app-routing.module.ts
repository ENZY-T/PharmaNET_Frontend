import { PharmacyDashboardComponent } from './components/pharmacy-dashboard/pharmacy-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { CartListComponent } from './components/customer/cart-list/cart-list.component';
import { CustomerViewComponent } from './components/customer/customer-view/customer-view.component';
import { LocationComponent } from './components/customer/location/location.component';
import { NavBarComponent } from './components/customer/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { MedicineCardComponent } from './components/home/medicine-card-edit/medicine-card.component';
import { MedicineCardPrevComponent } from './components/home/medicine-card-prev/medicine-card-prev.component';
import { PromotionsComponent } from './components/home/promotions/promotions.component';
import { LocalizationComponent } from './modules/localization/localization.component';
import { PharmacyDetailsComponent } from './components/pharmacy-profile/pharmacy-details/pharmacy-details.component';
import { PrescriptionUploadComponent } from './components/customer/prescription-upload/prescription-upload.component';
import { LandingPageComponent } from './components/landing/landing-page/landing-page.component';
import { PharmacyOwnerDetailsComponent } from './components/pharmacy-profile/pharmacy-owner-details/pharmacy-owner-details.component';
import { AddCardComponent } from './components/pharmacy-profile/add-card/add-card.component';
import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';
import { AllPromotionsComponent } from './components/customer/all-promotions/all-promotions.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
 
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'changeLanguage', component: LocalizationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'medicineCard', component: MedicineCardComponent },
  { path: 'medicineCardPrev', component: MedicineCardPrevComponent },
  { path: 'promotions', component: PromotionsComponent },
 
  { path: 'customerView',
   component: CustomerViewComponent
   },
 
  { path: 'customerViewNavigationbar', component: NavBarComponent },
  { path: 'cartList', component: CartListComponent },
  { path: 'location', component: LocationComponent },
  { path: 'pharma-dash', component: PharmacyDashboardComponent },
  { path: 'pharmacyOwnerProfile', component: PharmacyOwnerDetailsComponent },
  { path: 'pharmacyDetails', component: PharmacyDetailsComponent },
  { path: 'prescriptionUploadComponent', component: PrescriptionUploadComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'addCard', component: AddCardComponent },
  { path: 'allPromotions', component: AllPromotionsComponent},
  { path: '**', component: PageNotFoundComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
