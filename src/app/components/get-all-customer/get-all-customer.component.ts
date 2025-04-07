import { Component,OnInit  } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-get-all-customer',
  templateUrl: './get-all-customer.component.html',
  styleUrls: ['./get-all-customer.component.css']
})
export class GetAllCustomerComponent implements OnInit {
  customers: any[] = [];

  constructor(private customerService: CustomerService) {}

  


  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe(
      (data) => {
        console.log('API Response:', data); 
        this.customers = data; 
      },
      (error) => {
        console.error('Error fetching customers:', error);
      }
    );
  }

}
