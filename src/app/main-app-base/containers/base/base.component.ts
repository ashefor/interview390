import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { loggedUser } from '../../interface/user';
import { MainAppBaseFacade } from '../../services/main-app-base.facade';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  loggedUser$ : Observable<loggedUser>
  constructor(private baseFacade: MainAppBaseFacade) { }

  ngOnInit(): void {
    this.loggedUser$ = this.baseFacade.retrieveUser();
  }

}
