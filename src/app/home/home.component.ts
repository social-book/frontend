import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {User} from '../_models';
import {UserService} from '../_services';
import {SharedDataService} from '../shared-data.service';
import {PostImg} from '../_models/postImg';
import {AlbumService} from '../_services/album.service';
import {AlbumMeta} from '../_models/albumMeta';
import {DomBuilderForHomeComponent} from './DomBuilder';
import {Observable, of} from 'rxjs';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public currentUser: User;
  public users: User[] = [];
  public firstFourCollection: PostImg[] = [];
  public postImages: PostImg[][] = [];
  public posts: AlbumMeta[] = [];
  // public postsNumber: number[] = [];
  public ids: string[4]; // replacement for id1, id2, id3, id4
  public id1: string;
  public id2: string;
  public id3: string;
  public id4: string;
  public user: User;

  constructor(private userService: UserService, public sharedData: SharedDataService, private albumService: AlbumService) {

    // this.userService.getAllMock().pipe(first()).forEach(data => this.currentUser = data[0]);
    // this.currentUser =  JSON.parse(localStorage.getItem('currentUser'));

    // const friends$ = userService.getFriends(this.currentUser.userId);


    this.sharedData.user = JSON.parse(localStorage.getItem('currentUSer'));
    this.sharedData.setUser(JSON.parse(localStorage.getItem('currentUSer')));

    console.log('constructed home');

    /*

    // const friends$ = this.userService.mockFriends();

    this.userService.mockDefault().pipe(first()).subscribe(data => console.log(data));
    this.userService.mockFriends().subscribe(data => console.log(data));


    this.userService.mockOfRealData().subscribe(data => {
        console.log(data);
      },
      error1 => console.log('bojo cke'));


    */
  }


  ngOnInit() {
    // this.loadAllUsers();
    console.log('initialized home');
    this.id1 = '/assets/fjords.jpg';
    this.id2 = '/assets/fjords.jpg';
    this.id3 = '/assets/fjords.jpg';
    this.id4 = '/assets/fjords.jpg';
    // this.posts.push(new PostImg());


    this.user = this.sharedData.getLoggedInUser(); // this workds, but friends endpoint doesn't exist, use user and parse friends

    const friends$ = of(this.user.friends);

    // this.call1(friends$);

    const listContainer = document.getElementById('listContainer');

    this.callWithComponents1(friends$, listContainer);

    /*
    const listContainer = document.getElementById('listContainer');

    const el = document.createElement('li');

    try {
      listContainer.appendChild(el);
      console.log('errpendid');
    } catch (xmanca) {
      console.log(xmanca.toString());
    }*/


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


  callWithComponents1(friends$, lc) {

    friends$.subscribe(data => {
      console.log('FETCHING FRIENDS +++++++++++++++++++++++');
      /*for (let i = 0; i < data.length; i++) {
              this.albumService.getByUserId(data[i].userId).subscribe(data1 => {
                for (let j = 0; j < data1.length; j++) {
                  console.log(data1[j]);
                  this.posts.push(data1[j]);
                }
              },*/

      this.users.push(data);
      console.log('FINISHED FETCHING FRIENDS +++++++++++++++++++++++');
      this.callWithComponents2(lc);
    });

  }

  callWithComponents2(lc) {

    console.log('servis: ', this.albumService);
    this.albumService.getAllMock().pipe(first()).subscribe(data => {

        // DomBuilderForHomeComponent.buildRawListItemsAndConnect(lc, data);
        // console.log(DomBuilderForHomeComponent.liList[0].domElements);

        console.log('FETCHING ALBUMS +++++++++++++++++++++++');
        for (let i = 0; i < data.length; i++) {


          console.log('BUILDING LIST ITEM AND LINKING');
          DomBuilderForHomeComponent.buildRawListItemsAndConnect(lc, data, i);

          console.log(data);
          // this.postsNumber.push(j); // todo delete
          const meta = new AlbumMeta();
          meta.album_id = data[i].album_id;
          meta.album_title = data[i].album_title;
          meta.category_id = data[i].category_id;
          meta.user_id = data[i].user_id;
          meta.seq_nr = i;
          this.posts.push(meta);
          // can be anywhere...
          this.postImages[i] = [];

          console.log(DomBuilderForHomeComponent.liList[0].domElements);
          console.log(i);
          console.log(DomBuilderForHomeComponent.liList[i].domElements);
          // DomBuilderForHomeComponent.fillAlbumUserData(i, this.posts);

          for (let k = 0; k < 4; k++) {
            this.postImages[i][k] = new PostImg('https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg', k);
            /*this.postImages[i].push(new PostImg('https://scontent-frt3-2.xx.fbcdn.net/v/' +
              't31.0-8/18595508_10212899110776865_8647419151747411834_o.jpg?_' +
              'nc_cat=108&_nc_ht=scontent-frt3-2.xx&oh=c89675bf33166bbd844d5b0ff69ecc47&oe=5C403C09', k));*/
            DomBuilderForHomeComponent.fillAlbumData(i, this.postImages);
          }
        }

        console.log('FINISHED FETCHING FRIENDS +++++++++++++++++++++++');

        this.callWithComponents3();

      },
      error1 => console.log('Oh no, ', error1.toString()));

  }

  callWithComponents3() {

    console.log('servis: ', this.albumService);
    console.log('servis: ', this.userService);
    for (let iter = 0; iter < this.posts.length; iter++) {
      /*this.userService.mockFriends().pipe(first()).subscribe(podatek => { // TODO
          console.log('FETCHING OWNER OF ALBUM +++++++++++++++++++++++');
          console.log('user SYNC ADD');
          console.log('PODATEK[0]   ', podatek[0]);
          this.posts[iter].user = podatek[0];
          console.log(this.posts[iter]);
          console.log(this.posts[iter].user);
          console.log('FINISHED FETCHING OWNER OF ALBUM +++++++++++++++++++++++');
          console.log('FILLING USER DATA');
          DomBuilderForHomeComponent.fillAlbumUserData(iter, this.posts);
        },
        error1 => console.log('fail FETCHING OWNER'));*/

    }

  }


}


