import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../_models';
import {UserService} from '../_services';

@Component({
  selector: 'app-findpeople',
  templateUrl: './findpeople.component.html',
  styleUrls: ['./findpeople.component.css']
})
export class FindpeopleComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(userService: UserService) {
    this.users$ = userService.getAll();
  }

  ngOnInit() {
  }

}
