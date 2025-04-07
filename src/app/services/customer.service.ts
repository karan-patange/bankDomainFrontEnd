import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:9292/api/bank'; // Backend API base URL

  constructor(private http: HttpClient) {}

  // Method to send new customer registration request
  registerCustomer(customerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/newCustomer`, customerData);
  }

  private getAllUrl = 'http://localhost:9292/api/bank/getallcustomers'; // Correct API URL

  

  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.getAllUrl);
  }private signupUrl = 'http://localhost:9292/api/bank/register';



  registerUser(accountNumber: string, password: string): Observable<any> {
    const requestBody = {
      accountNumber: accountNumber,
      passWord: password
    };
    return this.http.post(this.signupUrl, requestBody,{ responseType: 'text' });
  }





  private loginUrl = 'http://localhost:9292/api/bank/login';

 

  login(accountNumber: string, passWord: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { accountNumber, passWord });
  }





  // FOR BRANCH DASHBOARD


  private baseUrl = 'http://localhost:9292/api/bank/branch';



  getPendingRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/pending`);
  }

  getApprovedRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/approved`);
  }

  getRejectedRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/rejected`);
  }

  approveRequest(id: number): Observable<string> {
    return this.http.put(`${this.baseUrl}/approve/${id}`, {}, { responseType: 'text' });
  }

  rejectRequest(id: number, remark: string): Observable<string> {
    return this.http.put(`${this.baseUrl}/reject/${id}`, { remark }, { responseType: 'text' });
  }



  //FOR MANAGER DASHBOARD


 private baseUrlForManager = 'http://localhost:9292/api/bank';


 getPendingRequestsForManager(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrlForManager}/manager/pending`);
}

getApprovedRequestsForManager(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrlForManager}/manager/approved`);
}

getRejectedRequestsForManager(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrlForManager}/manager/rejected`);
}

approveRequestForManager(id: number): Observable<string> {
  return this.http.put<string>(`${this.baseUrlForManager}/manager/approve/${id}`, {});
}



rejectRequestForManager(id: number, remark: string): Observable<string> {
  const body = { remark };
  return this.http.put<string>(`${this.baseUrlForManager}/manager/reject/${id}`, body);
}






// registerCustomerWd(formData: FormData): Observable<any> {
//   return this.http.post(`${this.apiUrl}/docDoc`, formData);
// }


registerCustomerWd(formData: FormData): Observable<any> {
  return this.http.post(`${this.apiUrl}/newCustomerRequest`, formData, {
    reportProgress: true,
    observe: 'response'
  });
}


getRequestDocuments(id: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/branch/request/${id}/documents`, { responseType: 'json' });
}



}
