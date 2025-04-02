import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  accountNumber: string = '';
  passWord: string = '';
  message: string = '';

  constructor(private CustomerService:CustomerService) {}

  login() {
    this.CustomerService.login(this.accountNumber, this.passWord)
      .subscribe({
        next: (response) => {
          if (response === true) {
            this.message = 'Login Successful!'; 
          } else {
            this.message = response; 
          }
        },
        error: (error) => {
          this.message = 'Something went wrong! Please try again.';
        }
      });
  }
}
