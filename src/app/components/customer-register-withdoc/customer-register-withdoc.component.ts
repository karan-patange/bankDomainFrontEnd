import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-register-withdoc',
  templateUrl: './customer-register-withdoc.component.html',
  styleUrls: ['./customer-register-withdoc.component.css']
})
export class CustomerRegisterWithdocComponent {
  customer = {
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

  customerPhoto: File | null = null;
  signaturePhoto: File | null = null;
  aadharCard: File | null = null;
  panCard: File | null = null;

  message: string = '';

  constructor(private customerService: CustomerService) {}

  onFileChange(event: any, field: string) {
    const file = event.target.files[0];
    if (field === 'customerPhoto') this.customerPhoto = file;
    if (field === 'signaturePhoto') this.signaturePhoto = file;
    if (field === 'aadharCard') this.aadharCard = file;
    if (field === 'panCard') this.panCard = file;
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('request', new Blob([JSON.stringify(this.customer)], { type: 'application/json' }));
    if (this.customerPhoto) formData.append('customerPhoto', this.customerPhoto);
    if (this.signaturePhoto) formData.append('signaturePhoto', this.signaturePhoto);
    if (this.aadharCard) formData.append('aadharCard', this.aadharCard);
    if (this.panCard) formData.append('panCard', this.panCard);

    this.customerService.registerCustomerWd(formData).subscribe({
      next: (response) => {
        this.message = 'Registration successful! Your request has been submitted.';
        console.log('Response:', response);
        this.resetForm();
      },
      error: (error) => {
        this.message = 'Error occurred during registration. Please try again.';
        console.error('Error:', error);
      }
    });
  }

  resetForm() {
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
    this.customerPhoto = null;
    this.signaturePhoto = null;
    this.aadharCard = null;
    this.panCard = null;
  }
}
