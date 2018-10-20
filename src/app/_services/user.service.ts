import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/${environment.user_path}`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/${environment.user_path}/` + id);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/${environment.user_path}/register`, user);
    }

    /*
    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }
    */

    update(user: User) {
        return this.http.put(`${environment.apiUrl}/${environment.user_path}/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/${environment.user_path}/` + id);
    }
}
