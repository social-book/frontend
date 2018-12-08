import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import {AlertService, AuthenticationService} from '../_services';
import {Observable} from 'rxjs';
import {stringify} from 'querystring';
import {SharedDataService} from '../shared-data.service';
import {User} from '../_models';


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
    private http: HttpClient,
    private  sd: SharedDataService) {
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


    /// MOcKKKKKKKKKKKK
    const user = new User();
    user.userId = 1;
    user.friends = new Array<User>();
    user.imgref = 'ggg';
    user.name = 'Mikhail';
    user.surname = 'Jurjevič Lermontov';
    user.username = 'shc';

    localStorage.setItem('currentUser', JSON.stringify(user));

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


    this.loading = true;

    /*
    this.authenticationService.getLogin(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(this.returnUrl);
          console.log(stringify(data) + ' helloworldSucess ');
          localStorage.setItem('currentUser', JSON.stringify(data));
          console.log(localStorage.getItem('currentUser'));
          this.sd.user = JSON.parse(localStorage.getItem('currentUser'));
          this.router.navigate([this.returnUrl + '/home']);
        },
        error => {
          console.log(this.returnUrl);
          console.log(JSON.stringify(error) + ' helloworld');
          this.alertService.error(error);
          this.loading = false;
        });

*/


    // TODO USE THIS
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(this.returnUrl);
          console.log(stringify(data) + ' helloworldSucess ');
          localStorage.setItem('currentUser', JSON.stringify(data));
          console.log(localStorage.getItem('currentUser'));
          this.sd.user = JSON.parse(localStorage.getItem('currentUser'));
          this.router.navigate([this.returnUrl + '/home']);
        },
        error => {
          console.log(this.returnUrl);
          console.log(JSON.stringify(error) + ' helloworld');
          this.alertService.error(error);
          this.loading = false;
        });


    ///////


    /*
    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(this.returnUrl);
          console.log(data + ' helloworld');
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log(this.returnUrl);
          console.log(error + ' helloworld');
          this.alertService.error(error);
          this.loading = false;
        });*/
  }

  // mock
  postData(url: string, headers: string[][], parameters: string[][]) {
    ////// GET/////
    const headersObj = new Headers();

    for (let i = 0; i < headers.length; i++) {
      headersObj.append(headers[i][0], headers[i][1]);
    }
    /*
    headersObj.append('Content-Type', 'application/json');
    headersObj.append('projectid', this.id);
    */
    const params = new URLSearchParams();

    for (let i = 0; i < parameters.length; i++) {
      // console.log(parameters[i][0] + ' : ' + parameters[i][1] + ' łłłłł ' + parameters[0][i] + ' : ' + parameters[1][i])
      params.append(parameters[i][0], parameters[i][1]);
    }
    // params.append('ax', this.someParamValue);
    // @ts-ignore
    const collection: Observable<string> = this.http.post(url, {headers: headers, search: params});
    collection.forEach(key => console.log(key));
  }

  // https://jsonplaceholder.typicode.com/posts
}
