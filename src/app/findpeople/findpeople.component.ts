import {Component, OnInit} from '@angular/core';
import {User} from '../_models';
import {UserService} from '../_services';
import {SharedDataService} from '../shared-data.service';
import {ignore} from 'selenium-webdriver/testing';

@Component({
  selector: 'app-findpeople',
  templateUrl: './findpeople.component.html',
  styleUrls: ['./findpeople.component.css']
})
export class FindpeopleComponent implements OnInit {

  // users$: Observable<User[]>;
  addedUsers: User[];
  ignoredIds: number[];
  avilableToAdd: User[];
  user: User;

  // availableUsers: Array<User>;

  constructor(protected userService: UserService, public sd: SharedDataService) {

    this.ignoredIds = new Array<number>();

    this.user = sd.getLoggedInUser(); // this workds, but friends endpoitn doesn't exist, use user and parse friends


    this.userService.getById(this.user.userId).subscribe(data => data.friends.forEach(item => this.ignoredIds.push(item.userId)));

    // this.userService.getFriends(this.user.userId).subscribe(data => data.forEach(item => this.ignoredIds.push(item.userId)));
    this.ignoredIds.push(this.user.userId);

    userService.getAll().subscribe(data =>
      data.forEach(item => {
          if (!this.ignoredIds.includes(item.userId)) {
            this.avilableToAdd.push(item);
          }
        }
      ))
    ;
    /*
    this.userService.getAll().subscribe(data => data.forEach(function (item) {

    }));

    /*
    this.users$ = userService.getAll();


    sd.user = new User(); // todo get it from logged in id
    this.users$.pipe(first()).subscribe(data  => {
    sd.user.username = data[0].username;
    sd.user.userId = data[0].userId;
    sd.user.password = data[0].password;
    sd.user.imgref = data[0].imgref;
    sd.user.name = data[0].name;
    sd.user.surname = data[0].surname;


  });

    this.availableUsers = new Array<User>();
    this.users$.forEach(data => {
        for (let i = 0; i < data.length; i++) {
          if (!(data[i].userId === sd.user.userId)) {
            // v if stavku tud hendli, če je sučajno že dodan kot prijatelj, torej upoštevil prijateljeve idje
            this.availableUsers.push(data[i]);
          }
        }

      }
    );*/

  }

  ngOnInit() {
  }

}
