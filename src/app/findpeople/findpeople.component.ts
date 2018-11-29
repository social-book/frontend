import {Component, OnInit} from '@angular/core';
import {User} from '../_models';
import {UserService} from '../_services';
import {SharedDataService} from '../shared-data.service';
import {Observable} from 'rxjs';

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
  user$: Observable<User>;

  // availableUsers: Array<User>;

  constructor(protected userService: UserService, public sd: SharedDataService) {

    /*
    this.ignoredIds = [];

    this.user = sd.getLoggedInUser(); // this workds, but friends endpoitn doesn't exist, use user and parse friends


    this.user$ = this.userService.getById(this.user.userId);

    const _this = this;

    this.user$.subscribe(data => {
      data.friends.forEach(item => {
        _this.ignoredIds.push(item.userId);
        console.log(item);
      });
      console.log(data);

      const _to = _this;

      userService.getAll().subscribe(dat =>
        dat.forEach(item => {
            if (!this.ignoredIds.includes(item.userId)) {
              _to.avilableToAdd.push(item);
            }
          }
        ))
      ;

    });

    // this.userService.getFriends(this.user.userId).subscribe(data => data.forEach(item => this.ignoredIds.push(item.userId)));
    this.ignoredIds.push(this.user.userId);


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

  getInstance() {
    return this;
  }

  ngOnInit() {


    this.ignoredIds = [];

    this.user = this.sd.getLoggedInUser(); // this workds, but friends endpoitn doesn't exist, use user and parse friends

    this.user$ = this.userService.getById(this.user.userId);


    this.user$.subscribe(data => {
      data.friends.forEach(item => {
        this.ignoredIds.push(item.userId);
        console.log(item);
      });
      console.log(data);


      this.userService.getAll().subscribe(dat =>
        dat.forEach(item => {
            if (!this.ignoredIds.includes(item.userId)) {
              this.avilableToAdd.push(item);
            }
          }
        ))
      ;

    });

    // this.userService.getFriends(this.user.userId).subscribe(data => data.forEach(item => this.ignoredIds.push(item.userId)));
    this.ignoredIds.push(this.user.userId);


  }

}
