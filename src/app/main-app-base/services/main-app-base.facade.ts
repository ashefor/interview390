import { Injectable } from '@angular/core';
import { MainAppBaseService } from './main-app-base.service';
import { map } from 'rxjs/operators';
import { loggedUser } from '../interface/user';

@Injectable({ providedIn: 'root' })
export class MainAppBaseFacade {
    constructor(private baseService: MainAppBaseService) { }


    retrieveUser() {
        return this.baseService.getLoggedInUser().pipe(map((user: loggedUser)=> {
            const last_name = `${user.last_name.slice(0,1)}.`
            const newUser = {...user, last_name}
            return user = newUser
        } ));
    }
}