import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-branchdashboard',
  templateUrl: './branchdashboard.component.html',
  styleUrls: ['./branchdashboard.component.css']
})
export class BranchdashboardComponent {
  currentView: string = 'pending';
      requests: any[] = [];
      showRejectPopup: boolean = false;
      selectedRequestId: number | null = null;
      rejectionReason: string = '';

      showDocsPopup: boolean = false;
  documents: { [key: string]: SafeUrl } | null = null; // SafeUrl for secure image rendering

  constructor(private http: HttpClient, private sanitizer: DomSanitizer,) {}
    
   
    
      loadRequests(type: string): void {
        this.currentView = type;
        this.http.get<any[]>(`http://localhost:9292/api/bank/branch/${type}`).subscribe({
          next: (response) => {
            this.requests = response;
          },
          error: (error) => {
            console.error(`Error fetching ${type} requests:`, error);
          }
        });
      }
    
      approveRequest(requestId: number): void {
        this.http.put(`http://localhost:9292/api/bank/branch/approve/${requestId}`, {}, { responseType: 'text' }).subscribe({
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
        
        const requestBody = { remark: this.rejectionReason };
        this.http.post(`http://localhost:9292/api/bank/branch/reject/${this.selectedRequestId}`, requestBody,{ responseType: 'text' }).subscribe({
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



      viewDocuments(id: number) {
        console.log('Fetching documents for ID:', id);
        this.http
          .get(`http://localhost:9292/api/bank/branch/request/${id}/documents`, {
            responseType: 'json',
          })
          .subscribe({
            next: (response: any) => {
              console.log('API Response:', response); // Response check karo
              this.documents = {};
              for (const [key, value] of Object.entries(response)) {
                if (value) {
                  const binaryStr = atob(value as string); // Base64 decode
                  const len = binaryStr.length;
                  const bytes = new Uint8Array(len);
                  for (let i = 0; i < len; i++) {
                    bytes[i] = binaryStr.charCodeAt(i);
                  }
                  let mimeType = 'image/jpeg'; // Default
                  if (key === 'panCard' || key === 'aadharCard') {
                    mimeType = 'application/pdf'; // Adjust for PDF
                  }
                  const blob = new Blob([bytes], { type: mimeType });
                  const url = URL.createObjectURL(blob);
                  // Use bypassSecurityTrustResourceUrl for embed/object
                  this.documents[key] = this.sanitizer.bypassSecurityTrustResourceUrl(url);
                }
              }
              this.showDocsPopup = true;
            },
            error: (error) => {
              console.error('Error fetching documents:', error);
              const errorMsg = error.status === 400 && error.error?.message
                ? error.error.message
                : `${error.status}: ${error.statusText || 'Unknown error'}`;
              alert(`Failed to load documents: ${errorMsg}`);
            },
          });
      }
      closeDocsPopup() {
        this.showDocsPopup = false;
        this.documents = null; // Reset documents
      }

}
