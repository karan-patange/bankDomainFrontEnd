import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-new-customer-registration',
  templateUrl: './new-customer-registration.component.html',
  styleUrls: ['./new-customer-registration.component.css']
})
export class NewCustomerRegistrationComponent {

  customer = {
    name: '',
    mobileNumber: null,
    panNumber: '',
    aadharNumber: '',
    emailId: '',
    accountType: 'SAVINGS', // Default value
    city: '',
    state: '',
    pinCode: null,
    status: 'PENDING' // Default status as per API
  };
  

  constructor(private customerService: CustomerService, private router: Router) {}


  message: string = '';

  

  onSubmit() {
    this.customerService.registerCustomer(this.customer)
      .subscribe({
        next: (response) => {
          this.message = 'Registration successful! Your request has been submitted.';
          console.log('Response:', response);
          // Optionally reset the form
          this.customer = {
            name: '',
            mobileNumber: null,
            panNumber: '',
            aadharNumber: '',
            emailId: '',
            accountType: 'SAVINGS',
            city: '',
            state: '',
            pinCode: null,
            status: 'PENDING'
          };
        },
        error: (error) => {
          this.message = 'Error occurred during registration. Please try again.';
          console.error('Error:', error);
        }
      });
  }
  

  // clearForm() {
  //   this.customer = {
  //     name: '',
  //     customerAddress: '',
  //     mobileNumber: null,
  //     panCard: '',
  //     adharcard: '',
  //     accountType: '',
  //     balance: '',
  //     addresses: [{ city: '', state: '', pinCode: '' }]
  //   };}

    indianStates: string[] = [
      'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
      'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
      'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
      'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
      'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
      'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
      'Lakshadweep', 'Delhi', 'Puducherry', 'Ladakh', 'Jammu and Kashmir'
    ];


    navigateToCustomers(){
    this.router.navigate(['/customers'])
    }


}