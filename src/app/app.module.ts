import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCustomerRegistrationComponent } from './components/new-customer-registration/new-customer-registration.component';

import { Pipe, PipeTransform } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';
import { GetAllCustomerComponent } from './components/get-all-customer/get-all-customer.component';
import { HeaderComponent } from './components/header/header.component';

import { LoginComponent } from './components/login/login.component';

import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { CustomerRegisterWithdocComponent } from './components/customer-register-withdoc/customer-register-withdoc.component';
import { BranchdashboardComponent } from './components/branchdashboard/branchdashboard.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { CustomerDashboardTestingGithubComponent } from './customer-dashboard-testing-github/customer-dashboard-testing-github.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCustomerRegistrationComponent,
    GetAllCustomerComponent,
    HeaderComponent,
  
    LoginComponent,
    
    CustomerDashboardComponent,
    HomePageComponent,
   
    ManagerDashboardComponent,
    CustomerRegisterWithdocComponent,
    BranchdashboardComponent,
    UserdashboardComponent,
    CustomerDashboardTestingGithubComponent,
   

    

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
