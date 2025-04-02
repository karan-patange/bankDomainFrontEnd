import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCustomerRegistrationComponent } from './new-customer-registration/new-customer-registration.component';

import { Pipe, PipeTransform } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';
import { GetAllCustomerComponent } from './get-all-customer/get-all-customer.component';
import { HeaderComponent } from './header/header.component';

import { LoginComponent } from './login/login.component';

import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BranchEmployeeDashboardComponent } from './branch-employee-dashboard/branch-employee-dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCustomerRegistrationComponent,
    GetAllCustomerComponent,
    HeaderComponent,
  
    LoginComponent,
    
    CustomerDashboardComponent,
    HomePageComponent,
    BranchEmployeeDashboardComponent,
    ManagerDashboardComponent,
   

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
