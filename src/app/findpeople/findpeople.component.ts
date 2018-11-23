import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../_models';
import {UserService} from '../_services';
import {SharedDataService} from '../shared-data.service';
import {first} from 'rxjs/operators';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-findpeople',
  templateUrl: './findpeople.component.html',
  styleUrls: ['./findpeople.component.css']
})
export class FindpeopleComponent implements OnInit {

  // users$: Observable<User[]>;
  addedUsers: User[];
  avilableToAdd: User[];
  availableUsers: Array<User>;

  constructor(protected userService: UserService, public sd: SharedDataService) {

    this.userService.getFriends(sd.getLoggedInUser().userId).subscribe(data => this.addedUsers = data);

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
