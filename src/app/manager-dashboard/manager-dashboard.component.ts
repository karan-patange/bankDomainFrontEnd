import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent {

 
    currentView: string = 'pending';
    requests: any[] = [];
    showRejectPopup: boolean = false;
    selectedRequestId: number | null = null;
    rejectionReason: string = '';
  
    constructor(private http: HttpClient) {}
  
    loadRequests(type: string): void {
      this.currentView = type;
      this.http.get<any[]>(`http://localhost:9292/api/bank/manager/${type}`).subscribe({
        next: (response) => {
          this.requests = response;
        },
        error: (error) => {
          console.error(`Error fetching ${type} requests:`, error);
        }
      });
    }
  
    approveRequest(requestId: number): void {
      this.http.put(`http://localhost:9292/api/bank/manager/approve/${requestId}`, {}, { responseType: 'text' }).subscribe({
        next: () => {
          alert('Request Approved Successfully!');
          this.loadRequests('pending'); // Refresh the list
        },
        error: (error) => {
          console.error('Error approving request:', error);
        }
      });
    }
  
    openRejectPopup(requestId: number): void {
      this.selectedRequestId = requestId;
      this.showRejectPopup = true;
    }
  
    rejectRequest(): void {
      if (!this.rejectionReason.trim()) {
        alert('Please enter a reason for rejection.');
        return;
      }
      
      const requestBody = { reason: this.rejectionReason };
      this.http.put(`http://localhost:9292/api/bank/manager/reject/${this.selectedRequestId}`, requestBody,{ responseType: 'text' }).subscribe({
        next: () => {
          alert('Request Rejected Successfully!');
          this.showRejectPopup = false;
          this.rejectionReason = '';
          this.loadRequests('pending'); // Refresh the list
        },
        error: (error) => {
          console.error('Error rejecting request:', error);
        }
      });
    }
  
    closeRejectPopup(): void {
      this.showRejectPopup = false;
      this.rejectionReason = '';
    }
}
