import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { stringify } from '@angular/core/src/util';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {

        // v primeru zadovoljivega casa dodava se oAuth
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*'
              }),
              body: {
                username: username,
                password: password
              }
        };

        // { username: username, password: password }
        return this.http.post<any>(`${environment.apiUrl}/${environment.user_path}/login`,
        httpOptions
        )
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }


    /// http://p04de.mocklab.io/login

  loginMockToBaseUrl(username: string, password: string) {

    // v primeru zadovoljivega casa dodava se oAuth
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      }),
      body: {
        username: username,
        password: password
      }
    };

    // { username: username, password: password }
    return this.http.post<any>(`http://p04de.mocklab.io/login`,
      httpOptions
    )
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }



  connect() {

    // v primeru zadovoljivega casa dodava se oAuth
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    // { username: username, password: password }
    return this.http.post<any>(`https://jsonplaceholder.typicode.com/posts/`,
      httpOptions
    )
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }



    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
