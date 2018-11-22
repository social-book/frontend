import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services';
import {SharedDataService} from '../shared-data.service';
import {User} from '../_models';
import {Album} from '../_models/album';
import {AlbumService} from '../_services/album.service';

// import { userInfo } from 'os';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  friends: User[];
  albums: Album[];

  constructor(private userService: UserService, public sharedData: SharedDataService, private  albumService: AlbumService) {
    this.user = this.sharedData.getLoggedInUser();
    console.log(this.user);

    this.userService.getFriends(this.user.userId).subscribe( data => this.friends = data);

    // this.albumService.getById(user.userId); TODO <-
    this.albumService.getAllMock().subscribe( data => this.albums = data);

  }

  ngOnInit() {
    // this.sd = JSON.parse(localStorage.getItem('currentUSer'));
    // console.log(this.sd.user);
  }

}
