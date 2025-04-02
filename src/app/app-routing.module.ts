import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCustomerRegistrationComponent } from './new-customer-registration/new-customer-registration.component';
import { GetAllCustomerComponent } from './get-all-customer/get-all-customer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { BranchEmployeeDashboardComponent } from './branch-employee-dashboard/branch-employee-dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }, 
  { path: 'new-registration', component: NewCustomerRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-dashboard', component: CustomerDashboardComponent },
  { path: 'branch-employee-dashboard', component: BranchEmployeeDashboardComponent },
  { path: 'manager-dashboard', component: ManagerDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
