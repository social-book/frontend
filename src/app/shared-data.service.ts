import {Injectable} from '@angular/core';
import {User} from './_models';

/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class SharedDataService {

  // myMethod$: Observable<any>;
  // private myMethodSubject = new Subject()<any>();
  public user: User;

  constructor() {

    // this.myMethod$ = this.myMethodSubject.asObservable();
    console.log('starting shared data service');
    console.log(localStorage.getItem('currentUser'));

    // console.log('sharedService initilaized with: ', this.user.name, ' ', this.user.surname);
  }

  setUserFromOption() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  setUser(data) {
    this.user = JSON.parse(data);
    console.log(localStorage.getItem('currentUser'));
  }

  getLoggedInUser(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  myMethod(data) {
    console.log(data); // I have data! Let's return it so subscribers can use it!
    // we can do stuff with data if we want
    // this.myMethodSubject.next(data);
  }
}
