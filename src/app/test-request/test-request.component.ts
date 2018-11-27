import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../shared-data.service';
import {AlbumService} from '../_services/album.service';
import {UserService} from '../_services';
import {error} from 'selenium-webdriver';

@Component({
  selector: 'app-test-request',
  templateUrl: './test-request.component.html',
  styleUrls: ['./test-request.component.css']
})
export class TestRequestComponent implements OnInit {

  constructor(public shareData: SharedDataService, public albumService: AlbumService, public  userService: UserService) {

    console.log('GGGGGGGGGGGGG')
    userService.testUserCall1().subscribe(data => console.log('CALLING: ' + data, err => console.log('ERRORRRRR: ' + JSON.stringify(err))));
    console.log('GGGGGGGGGGGGGGG')
    userService.testUserCall().subscribe(data => console.log('CALLLLLLLLLING FROM IBM ' + data));
    userService.getAll().subscribe(data => console.log(data));
    userService.getById(1).subscribe(data => console.log(data));
    userService.getByName('aaaa').subscribe(data => console.log(data));
    albumService.getAll().subscribe(data => console.log(data));
    albumService.getByUserId(1).subscribe(data => console.log(data));
    albumService.getFriendsAlbums([1, 2, 3]).forEach(data => data.subscribe(d => console.log(d)));


  }

  ngOnInit() {
  }

}
