import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { loggedUser } from '../../interface/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input('user$') user$: Observable<loggedUser>
  
  constructor() { }

  ngOnInit(): void {
  }

}
