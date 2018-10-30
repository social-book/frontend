import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {User} from '../_models';
import {UserService} from '../_services';
import {SharedDataService} from '../shared-data.service';
import {PostImg} from '../_models/postImg';
import {Album} from '../_models/album';
import {AlbumService} from '../_services/album.service';


@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  postImages: PostImg[] = [];
  posts: Album[] = [];
  id1: string;
  id2: string;
  id3: string;
  id4: string;

  constructor(private userService: UserService, private albumService: AlbumService, sharedData: SharedDataService) {
    this.userService.getAll().pipe(first()).forEach(data => this.currentUser = data[0]);
    // this.currentUser =  JSON.parse(localStorage.getItem('currentUser'));


    // const friends$ = userService.getFriends(this.currentUser.userId);
    const friends$ = userService.mockFriends();

    friends$.subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        albumService.getByUserId(data[i].userId).subscribe(data1 => {
          for (let j = 0; j < data1.length; j++) {
            this.posts.push(data1[j]);
          }
        });
      }
    });

    console.log(this.posts);

    // const posts$ = albumService.getAll();


    sharedData.user = this.currentUser;
    this.id1 = '/assets/fjords.jpg';
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
    this.id1 = '/assets/fjords.jpg';
    this.id2 = '/assets/fjords.jpg';
    this.id3 = '/assets/fjords.jpg';
    this.id4 = '/assets/fjords.jpg';
    // this.posts.push(new PostImg());
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
