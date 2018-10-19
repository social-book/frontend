import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import {AlertService, AuthenticationService} from '../_services';
import {Observable} from 'rxjs';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private http: HttpClient) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.f.username.value + ' ' + this.f.password.value);

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.postData('https://jsonplaceholder.typicode.com/posts', [['Content-Type', 'application/json']], [['name', 'miha']])

    /*
    //////GET/////
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('projectid', this.id);
    const params = new URLSearchParams();
    params.append('ax', this.someParamValue)
    const collection: Observable<String> = this.http.get('https://jsonplaceholder.typicode.com/posts', { headers: headers, search: params })
    collection.forEach(key => console.log(key));
    */

    /*this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
            */
  }

  postData(url: string, headers: string[][], parameters: string[][]) {
    //////GET/////
    const headersObj = new Headers();

    for (let i = 0; i = headers.length; i++) {
      headersObj.append(headers[0][i], headers[1][i]);
    }
    /*
    headersObj.append('Content-Type', 'application/json');
    headersObj.append('projectid', this.id);
    */
    const params = new URLSearchParams();

    for (let i = 0; i = parameters.length; i++) {
      params.append(parameters[i][0], parameters[i][1]);
    }
    //params.append('ax', this.someParamValue);
    const collection: Observable<string> = this.http.post(url, {headers: headers, search: params});
    collection.forEach(key => console.log(key));
  }
  //https://jsonplaceholder.typicode.com/posts
}
