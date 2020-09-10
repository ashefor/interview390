import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { loggedUser } from '../interface/user';

@Injectable({ providedIn: 'root' })

export class MainAppBaseService {
    constructor(private http: HttpClient) { }


    getLoggedInUser() {
        return this.http.get<loggedUser>(`${environment.apiURL}/user`)
    }
}