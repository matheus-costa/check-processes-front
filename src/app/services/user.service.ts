import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { ENV } from 'src/environments/environment';

@Injectable()
export class UserService {
    constructor(
        private http: HttpClient
    ) { }
    
    list() {
        return this.http.get<User[]>(`${ENV.API_URL}/user`);
    }

    save(user: User) {
        return this.http.post<User>(`${ENV.API_URL}/user/save`, user);
    }
}