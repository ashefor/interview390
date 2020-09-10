import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfoComponent } from './card-info/card-info.component';
import { CardSelectComponent } from './card-select/card-select.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [CardInfoComponent, CardSelectComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CardInfoComponent,
    CardSelectComponent
  ]
})
export class CardModule { }
