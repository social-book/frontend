import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services';
import {SharedDataService} from '../shared-data.service';
import {User} from '../_models';

// import { userInfo } from 'os';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  friends: User[];

  constructor(private userService: UserService, public sharedData: SharedDataService) {
    this.user = this.sharedData.getLoggedInUser();
    console.log(this.user);

    this.userService.mockFriends().subscribe( data => this.friends = data);

  }

  ngOnInit() {
    // this.sd = JSON.parse(localStorage.getItem('currentUSer'));
    // console.log(this.sd.user);
  }

}
