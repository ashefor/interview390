import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { contact } from 'src/app/dashboard/interfaces/contact';
import { errorMessage } from 'src/app/dashboard/interfaces/error';

@Component({
  selector: 'app-card-select',
  templateUrl: './card-select.component.html',
  styleUrls: ['./card-select.component.scss']
})
export class CardSelectComponent implements OnInit {
  @Input('accounts') accounts: Array<any>
  @Input('placeholder') placeholder: string;
  @Input('currency') currency: string;
  @Input('allContacts$') allContacts$: Observable<contact[]>;
  @Input() error$: Observable<errorMessage>;
  selectedAccount = null;
  constructor() {

  }

  ngOnInit(): void {
  }


}
