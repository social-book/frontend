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
  // public currentUser: User;
  public users: User[] = [];
  public postImages: PostImg[] = [];
  public posts: Album[] = [];
  public id1: string;
  public id2: string;
  public id3: string;
  public id4: string;

  constructor(private userService: UserService, public sharedData: SharedDataService, private albumService: AlbumService) {

    // this.userService.getAllMock().pipe(first()).forEach(data => this.currentUser = data[0]);
    // this.currentUser =  JSON.parse(localStorage.getItem('currentUser'));

    // const friends$ = userService.getFriends(this.currentUser.userId);

    this.sharedData.user = JSON.parse(localStorage.getItem('currentUSer'));
    this.sharedData.setUser(JSON.parse(localStorage.getItem('currentUSer')));

    console.log('constructed home');

    const friends$ = this.userService.mockFriends();

    this.userService.mockDefault().pipe(first()).subscribe(data => console.log(data));
    this.userService.mockFriends().subscribe(data => console.log(data));

    friends$.subscribe(data => {
      /*for (let i = 0; i < data.length; i++) {
              this.albumService.getByUserId(data[i].userId).subscribe(data1 => {
                for (let j = 0; j < data1.length; j++) {
                  console.log(data1[j]);
                  this.posts.push(data1[j]);
                }
              },*/
      for (let i = 0; i < data.length; i++) {
        this.albumService.getAllMock().subscribe(data1 => {
          for (let j = 0; j < data1.length; j++) {
            console.log(data1[j]);
            this.posts.push(data1[j]);
          }
        }, error => {
          console.log('error occurred in albumService:     ', error);
        });
      }
    }, error => {
      console.log('error occur in friends subscription:   ', error);
    });

    console.log(this.posts);

    // const posts$ = albumService.getAll();


    // sharedData.user = this.currentUser;
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

    /**/
  }

  ngOnInit() {
    // this.loadAllUsers();
    console.log('initialized home');
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

