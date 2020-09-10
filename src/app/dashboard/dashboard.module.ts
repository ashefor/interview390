import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CardModule } from '../card/card.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DashboardComponent, TransactionComponent],
  imports: [
    CommonModule,
    CardModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
