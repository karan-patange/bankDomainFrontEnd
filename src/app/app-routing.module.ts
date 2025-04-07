import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCustomerRegistrationComponent } from './components/new-customer-registration/new-customer-registration.component';
import { GetAllCustomerComponent } from './components/get-all-customer/get-all-customer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
//import { BranchEmployeeDashboardComponent } from './branch-employee-dashboard/branch-employee-dashboard.component';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { CustomerRegisterWithdocComponent } from './components/customer-register-withdoc/customer-register-withdoc.component';
import { BranchdashboardComponent } from './components/branchdashboard/branchdashboard.component';
const routes: Routes = [
  { path: '', component: HomePageComponent }, 
  // { path: 'new-registration', component: NewCustomerRegistrationComponent },
  { path: 'new-registration', component: CustomerRegisterWithdocComponent },

  { path: 'login', component: LoginComponent },
  { path: 'user-dashboard', component: CustomerDashboardComponent },
  { path: 'Branchdashboard', component: BranchdashboardComponent },
  { path: 'manager-dashboard', component: ManagerDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
