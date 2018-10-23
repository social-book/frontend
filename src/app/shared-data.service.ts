import { Injectable } from '@angular/core';
import {User} from './_models';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  // myMethod$: Observable<any>;
  // private myMethodSubject = new Subject()<any>();
  public user: User;

  constructor() {
    // this.myMethod$ = this.myMethodSubject.asObservable();
    this.user = new User();
  }

  myMethod(data) {
    console.log(data); // I have data! Let's return it so subscribers can use it!
    // we can do stuff with data if we want
    // this.myMethodSubject.next(data);
  }
}
