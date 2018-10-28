import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {User} from '../_models';
import {UserService} from '../_services';
import {SharedDataService} from '../shared-data.service';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  id1: string;
  id2: string;
  id3: string;
  id4: string;

  constructor(private userService: UserService, sharedData: SharedDataService) {
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    sharedData.user = this.currentUser;
    this.id1 = '/home/miha/Documents/git/frontend/src/assets/add.svg';
    if (this.id2 = null) {
      document.getElementById('si').hidden = true;
    }
    if (this.id3 = null) {
      document.getElementById('ti').hidden = true;
    }
    if (this.id4 = null) {
      document.getElementById('fi').hidden = true;
    }
  }

  ngOnInit() {
    // this.loadAllUsers();
    this.id1 = null;
    this.id2 = null;
    this.id3 = null;
    this.id4 = null;
  }

  deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers();
    });
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }
}
