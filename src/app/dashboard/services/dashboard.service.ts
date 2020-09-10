import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { card } from 'src/app/card/interfaces/card';
import { transaction } from '../interfaces/transaction';
import { contact } from '../interfaces/contact';
import { analytics } from '../interfaces/analytics';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getAllPaymentCards() {
    return this.http.get<card[]>(`${environment.apiURL}/cards`)
  }

  getAllTransactions() {
    return this.http.get<transaction[]>(`${environment.apiURL}/transactions`)
  }

  getAllContacts() {
    return this.http.get<contact[]>(`${environment.apiURL}/contacts`)
  }

  getAnalytics() {
    return this.http.get<analytics[]>(`${environment.apiURL}/analytics`)
  }
}
