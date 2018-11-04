import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {User} from '../_models';

@Injectable()
export class UserService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/${environment.user_path}`);
  }


  /*
  getAllMock() {
    const link = 'http://localhost:3000/allusers';
    console.log('sending request to ', link)
    return this.http.get<User[]>(link, this.httpOptions);
  }

  /*getAllMock() {
    const link = 'https://my-json-server.typicode.com/mihastele/myJsonMock/users';
    console.log('sending request to ', link)
    return this.http.get<User[]>(link, this.httpOptions);
  }*/

  // /user/{userId}/friends
  getFriends(id: number) {
    //  return this.http.get<User[]>(`${environment.apiUrl}/${environment.user_path}/${id}/friends`);
    return this.http.get<User[]>(`${environment.apiUrl}/${environment.user_path}/${id}/friends`);
  }

  mockFriends() {
    return this.http.get<User[]>(`https://my-json-server.typicode.com/mihastele/myJsonMock/friendsMock`);
  }

  getById(id: number) {
    return this.http.get<User>(`${environment.apiUrl}/${environment.user_path}/` + id);
  }

  getByName(name: string) {
    return this.http.get(`${environment.apiUrl}/${environment.user_path}/name/` + name);
  }

  mockDefault() {
    return this.http.get(`https://my-json-server.typicode.com/mihastele/myJsonMock/friendsMock`);
  }


  // TODO
  addFriend() {

  }


  removeFriend() {

  }


  /* duplicate */

  /*
  login(user: User) {
    return this.http.post(`${environment.apiUrl}/${environment.user_path}/login`, {
      'username': user.username,
      'password': user.password
    });
  }*/

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
