import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { transaction } from '../../interfaces/transaction';
import { errorMessage } from '../../interfaces/error';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  @Input('allTransactions$') allTransactions$: Observable<transaction[]>;
  @Input() error$: Observable<errorMessage>;
  constructor() { }

  ngOnInit(): void {
  }

}
