import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CountryInputComponent } from './country-input/country-input.component';
import { ProgressComponent } from './progress/progress.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [ButtonComponent, AvatarComponent, SearchBarComponent, CountryInputComponent, ProgressComponent, AnalyticsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    NzDividerModule,
    NzSelectModule
  ],
  exports: [
    ButtonComponent,
    SearchBarComponent,
    AvatarComponent,
    NzSelectModule,
    NzDividerModule,
    ChartsModule,
    FormsModule,
    AnalyticsComponent,
    ProgressComponent,
    CountryInputComponent
  ]
})
export class SharedModule { }
