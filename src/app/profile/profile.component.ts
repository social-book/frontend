import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(userService: UserService) {
    this.user = new User();
    const obs = userService.getById(1);
    this.user.id = obs[0].id;
    this.user.firstName = obs[0].firstName;
    this.user.lastName = obs[0].lastName;
   }

  ngOnInit() {
  }

}
