import { Injectable } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Observable, BehaviorSubject, NEVER } from 'rxjs';
import { shareReplay, catchError, tap, map } from 'rxjs/operators';
import { errorMessage } from '../interfaces/error';

@Injectable({
    providedIn: 'root'
})

export class DashboardFacade {
    paymentCardError$ = new BehaviorSubject<errorMessage>(null);
    transactionError$ = new BehaviorSubject<errorMessage>(null);
    contactError$ = new BehaviorSubject<errorMessage>(null);
    analyticsError$ = new BehaviorSubject<errorMessage>(null);
    constructor(private dashboardService: DashboardService) { }
    

    getPaymentCardError$() {
        return this.paymentCardError$.asObservable();
    }

    setPaymentCardError(error: errorMessage) {
        return this.paymentCardError$.next(error);
    }

    getTransactionError$() {
        return this.transactionError$.asObservable();
    }

    setTransactionError(error: errorMessage) {
        return this.transactionError$.next(error);
    }

    getContactError$() {
        return this.contactError$.asObservable();
    }

    setContactError(error: errorMessage) {
        return this.contactError$.next(error);
    }

    getAnalyticsError$() {
        return this.analyticsError$.asObservable();
    }

    setAnalyticsError(error: errorMessage) {
        return this.analyticsError$.next(error);
    }

    retrieveAllCards() {
        return this.dashboardService.getAllPaymentCards().pipe(catchError((error) => {
            this.setPaymentCardError({message: 'Error fetching card information, An error was encountered while retrieving cards information'})
            return NEVER;
        }))
    }

    retrieveAllTransactions() {
        return this.dashboardService.getAllTransactions().pipe(catchError((error) => {
            this.setTransactionError({message: 'Error fetching transactions, An error was encountered while retrieving transaction information'})
            return NEVER;
        }))
    }

    retrieveAllRecentContacts() {
        return this.dashboardService.getAllContacts().pipe(catchError((error) => {
            this.setContactError({message: 'Error fetching contacts, An error was encountered while retrieving contacts information'})
            return NEVER;
        }))
    }

    retrieveAnalytics() {
        return this.dashboardService.getAnalytics().pipe(catchError((error) => {
            this.setAnalyticsError({message: 'Error fetching data, An error was encountered while retrieving analytics data'})
            return NEVER;
        }))
    }
}