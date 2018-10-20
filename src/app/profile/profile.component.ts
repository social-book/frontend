import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { User } from '../_models';
import { userInfo } from 'os';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(userService: UserService) {
    this.user = new User();

    const obs$ = userService.getAll().subscribe((val) => {
      console.log('Current object: ', val, '  user ', this.user);
      this.user.userId = val[0].userId;
      this.user.username = val[0].username;
   },
   (msg) => { console.log('Error Object: ', msg); });

   console.log(document.getElementById('nasl'));

    /*
    this.user.userId = obs[0].id;
    this.user.username = obs[0].username;
    this.user.password = obs[0].password;
    */
   }

  ngOnInit() {
  }

}
