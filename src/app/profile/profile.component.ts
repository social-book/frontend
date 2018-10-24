import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { User } from '../_models';
import {SharedDataService} from '../shared-data.service';
// import { userInfo } from 'os';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  sd: SharedDataService;

  constructor(userService: UserService, sd: SharedDataService) {
    this.user = new User();


    const obs$ = userService.getAll().subscribe((val) => {
      console.log('Current object: ', val, '  user ', this.user);
      this.user.userId = val[0].userId; // pipe getall.pipe(first())..
      this.user.username = val[0].username;
      this.user.name = val[0].name;
      this.user.surname = val[0].surname;
      this.user.imgref = val[0].imgref;

      document.getElementById('nasl').innerHTML = '' + this.user.username + '\'s profile';
   },
   (msg) => { console.log('Error Object: ', msg); });
   console.log(document.getElementById('title').innerHTML);


    sd.user = this.user;
    this.sd = sd;
    /*
    this.user.userId = obs[0].id;
    this.user.username = obs[0].username;
    this.user.password = obs[0].password;
    */
   }

  ngOnInit() {
  }

}
