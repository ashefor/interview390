import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppBaseRoutingModule } from './main-app-base-routing.module';
import { BaseComponent } from './containers/base/base.component';
import { NavComponent } from './components/nav/nav.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BaseComponent, NavComponent, SideBarComponent],
  imports: [
    CommonModule,
    SharedModule,
    MainAppBaseRoutingModule
  ]
})
export class MainAppBaseModule { }
