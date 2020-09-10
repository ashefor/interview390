import { Component, OnInit, OnDestroy } from '@angular/core';
import { countries } from '../../dummy-data/countries';
import { dummyAccounts } from '../../dummy-data/dummy-account';
import * as faker from 'faker';
import { DashboardFacade } from '../../services/dashboard.facade';
import { Observable } from 'rxjs';
import { card } from 'src/app/card/interfaces/card';
import { transaction } from '../../interfaces/transaction';
import { contact } from '../../interfaces/contact';
import { tap } from 'rxjs/operators';
import { element } from 'protractor';
import { analytics } from '../../interfaces/analytics';
import { errorMessage } from '../../interfaces/error';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  countries = countries;
  booleanArray = [];
  accounts = dummyAccounts
  showMore: boolean = false;
  allPaymentCards$: Observable<card[]>;
  allTransactions$: Observable<transaction[]>;
  allContacts$: Observable<contact[]>;
  allAnalytics$: Observable<analytics[]>;

  paymentCardError$: Observable<errorMessage>;
  transactionsError$: Observable<errorMessage>;
  contactError$: Observable<errorMessage>;
  analyticsError$: Observable<errorMessage>;

  constructor(private dashboardFacade: DashboardFacade) { }

  ngOnInit(): void {
    this.allPaymentCards$ = this.dashboardFacade.retrieveAllCards().pipe(tap((data: card[]) => {
      for (let index = 0; index < data.length; index++) {
        this.booleanArray.push({
          show: true
        })
      }
    }));
    this.allTransactions$ = this.dashboardFacade.retrieveAllTransactions();
    this.allContacts$ = this.dashboardFacade.retrieveAllRecentContacts();
    this.allAnalytics$ = this.dashboardFacade.retrieveAnalytics();

    this.paymentCardError$ = this.dashboardFacade.getPaymentCardError$();
    this.transactionsError$ = this.dashboardFacade.getTransactionError$();
    this.contactError$ = this.dashboardFacade.getContactError$();
    this.analyticsError$ = this.dashboardFacade.getAnalyticsError$();
  }

  ngOnDestroy() {
    this.dashboardFacade.setAnalyticsError(null);
    this.dashboardFacade.setContactError(null);
    this.dashboardFacade.setPaymentCardError(null);
    this.dashboardFacade.setTransactionError(null);
  }
  toggleMoreInfo(e) {
    const clone = [...this.booleanArray];
    const found = clone[e];
    found.show = ! found.show;
    let notFound = this.booleanArray.filter((elem) => elem !== found)
    notFound.map((ele) => ele.show = true)
  }
}
