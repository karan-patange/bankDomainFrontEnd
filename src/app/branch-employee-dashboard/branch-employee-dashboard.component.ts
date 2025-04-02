import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-branch-employee-dashboard',
  templateUrl: './branch-employee-dashboard.component.html',
  styleUrls: ['./branch-employee-dashboard.component.css']
})
export class BranchEmployeeDashboardComponent {

  requests: any[] = [];
  selectedRequest: any = null;
  remark: string = '';
  message: any = '';
  currentView: 'pending' | 'approved' | 'rejected' = 'pending'; // Default view
  cdr: any;


  
  constructor(private CustomerService : CustomerService ) {}



  // this.message = Response.message ?? JSON.stringify(Response);




  ngOnInit(): void {
    this.loadPendingRequests(); // Load pending requests by default
  }

  loadPendingRequests(): void {
    this.currentView = 'pending';
    this.requests = []; // Clear the list immediately to show loading state
    
    this.CustomerService.getPendingRequests().subscribe({
      next: (requests) => {
        this.requests = requests;
        
      },
      error: (error) => {
        this.message = 'Error loading pending requests';
        console.error(error);
      }
    });
  }

  loadApprovedRequests(): void {
    this.currentView = 'approved';
    this.requests = [];
    
    this.CustomerService.getApprovedRequests().subscribe({
      next: (requests) => {
        this.requests = requests;
       
      },
      error: (error) => {
        this.message = 'Error loading approved requests';
        console.error(error);
        
      }
    });
  }

  loadRejectedRequests(): void {
    this.currentView = 'rejected';
    this.requests = [];
   
    this.CustomerService.getRejectedRequests().subscribe({
      next: (requests) => {
        this.requests = requests;
       
      },
      error: (error) => {
        this.message = 'Error loading rejected requests';
        console.error(error);
      }
    });
  }

  showRemarkModal(request: any): void {
    this.selectedRequest = request;
    this.remark = '';
  }

  approveRequest(id: number): void {
    this.CustomerService.approveRequest(id).subscribe({
      next: (response) => {
        this.message = response;
        this.loadPendingRequests(); // Refresh the list
      }
      
    });
  }

  rejectRequest(): void {
    if (!this.remark.trim()) {
      this.message = 'Remark is required for rejection';
      return;
    }

    this.CustomerService.rejectRequest(this.selectedRequest.id, this.remark).subscribe({
      next: (response) => {
        this.message = response;
         // Refresh the list
        this.selectedRequest = null; // Close modal
        this.remark = '';
      }
      
    });
  }

}
