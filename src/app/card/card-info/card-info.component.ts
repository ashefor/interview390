import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { card } from '../interfaces/card';
import { errorMessage } from 'src/app/dashboard/interfaces/error';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {
  @Input('paymentCards$') paymentCards$: Observable<card[]>;
  @Input('showMoreInfo') showMoreInfo: Array<any>;
  @Input() error$: Observable<errorMessage>;
  @Output('toggleMoreInfo') toggleMoreInfo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  showMoreDetails(event) {
    this.toggleMoreInfo.emit(event);
  }
}
