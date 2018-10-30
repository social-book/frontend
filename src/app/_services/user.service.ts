import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/${environment.user_path}`);
    }

    // /user/{userId}/friends
    getFriends(id: number) {
      //  return this.http.get<User[]>(`${environment.apiUrl}/${environment.user_path}/${id}/friends`);
      return this.http.get<User[]>(`${environment.apiUrl}/${environment.user_path}/${id}/friends`);
    }

    mockFriends(){
      return this.http.get<User[]>(`https://my-json-server.typicode.com/mihastele/myJsonMock/friendsMock`);
    }
    
    getById(id: number) {
        return this.http.get<User>(`${environment.apiUrl}/${environment.user_path}/` + id);
    }

    getByName(name: string) {
      return this.http.get(`${environment.apiUrl}/${environment.user_path}/name/` + name);
    }


    /* duplicate */
    login(user: User) {
      return this.http.post(`${environment.apiUrl}/${environment.user_path}/login`, {
        'username': user.username,
        'password': user.password
      });
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
        return this.http.put(`${environment.apiUrl}/${environment.user_path}/` + user.userId, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/${environment.user_path}/` + id);
    }
}
