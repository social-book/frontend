import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SharedDataService} from '../shared-data.service';
import {User} from '../_models';
import {Album} from '../_models/album';
import {AlbumService} from '../_services/album.service';
import {environment} from '../../environments/environment';
import {Category} from '../_models/category';

@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrls: ['./addimage.component.css']
})
export class AddimageComponent implements OnInit {

  user: User;
  album: Album;
  files: File[];
  myAlbums: Album[];
  params: HttpParams;
  categories: Category[];
  tempString: string;

  constructor(private http: HttpClient, public sharedData: SharedDataService, public albumService: AlbumService) {
    console.log(this.sharedData.user);

    this.user = this.sharedData.getLoggedInUser();
    // albumService.getfirendAlbumsMock(this.user.userId).subscribe(data => this.myAlbums = data);

    albumService.getByUserId(this.user.userId).subscribe((data => this.myAlbums = data).bind(this));
    // TODO //albumService.getfirendAlbumsMock(this.user.userId).subscribe(data => this.myAlbums = data);

  }


  // TODO GGGGGGGGGGGGGGGGGGGGGGGGGGGGG
  onChange(event: any, input: any) {
    this.files = [].slice.call(event.target.files);

    input.value = this.files.map(f => f.name).join(', ');

    console.log(this.getBase64(this.files[0]));
  }


  getBase64(file): string {
    const reader = new FileReader();
    this.tempString = '';
    // reader.readAsDataURL(file);
    reader.onload = () => {
      // console.log(reader.result.toString().substring(reader.result.toString().indexOf(',') + 1));
      this.tempString = reader.result.toString().substring(reader.result.toString().indexOf(',') + 1);
      return this.tempString;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
      return '';
    };
    reader.readAsDataURL(file);
    return this.tempString;
  }

  sendRequest64(file) {
    const reader = new FileReader();
    // reader.readAsDataURL(file);
    reader.onload = () => {
      // console.log(reader.result.toString().substring(reader.result.toString().indexOf(',') + 1));
      const gg = reader.result.toString().substring(reader.result.toString().indexOf(',') + 1);

      for (let i = 0; i < this.files.length; i++) {

        const imageString = this.getBase64(this.files[i]);
        console.log('STRINGIIII' + imageString);
        const getBody = {
          'userId': this.user.userId,
          'albumId': this.album.id,
          'image': gg
        };

        this.http.post(`${environment.apiImageUrl}` + `${environment.uploads}`, getBody).subscribe(
          (r) => {
            console.log('got r', r, ' : ', getBody);
            window.location.reload();
          },
          error => {
            console.log(error);
          }
        );
        /*
        this.http.get(`${environment.apiImageUrl}` + `${environment.uploads}?userID=` +
          this.user.userId + '&albumId=' + this.album.id +
          '&image=' + gg).subscribe(
          (r) => {
            console.log('got r', r, ' : ', getBody);
          },
          error => {
            console.log(error);
          }
        );
        */
      }

    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    reader.readAsDataURL(file[0]);

  }

  xor1() {
    document.getElementById('sa').hidden = true;
    document.getElementById('ca').hidden = false;
    document.getElementById('uploader').hidden = true;
  }

  xor2() {
    document.getElementById('sa').hidden = false;
    document.getElementById('ca').hidden = true;
    document.getElementById('uploader').hidden = false;
  }

  /*
  getBase64Dmitri(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }*/

  onUpload() {

    console.log('XAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    console.log(this.getBase64(this.files[0]));

    this.myAlbums.forEach(element => {

      const e = <HTMLSelectElement>document.getElementById('selectedAlbum');
      const val = e.options[e.selectedIndex].firstElementChild.firstElementChild.innerHTML;

      if (+document.getElementById(val).innerHTML === element.id) {
        this.album = element;
      }
    });

    /*const getBody = {
      'userId': 1234,
      'albumId': 1,
      'image': (<string>this.getBase64(this.files[0]))
    };

    console.log(getBody);*/

    /////////////////////////////////////////

    this.sendRequest64(this.files);

    /////////////////////////////////////////

  }

  ngOnInit() {
    this.albumService.getCategories().subscribe((data => this.categories = data).bind(this));
  }

  onCreateAlbum() {

    const name = (<HTMLInputElement>document.getElementById('albumName')).value;
    const category = (<HTMLSelectElement>document.getElementById('selCategory')).value;
    console.log(category + 'XAAAAAAAAAAAAAA');
    const id = this.sharedData.getLoggedInUser().userId;


    /*
    const album: Album = {
      'category': {
        'id': +category.split('|')[0],
        'title': category.split('|')[1]
      },
      'id': 1,
      'images': [],
      'userId': id,
      'title': name
    };

    console.log(JSON.stringify(album));

    const path = `${environment.apiAlbumUrl}/${environment.album_path}/`
    console.log(path);
    return this.http.post<any>(path, album).pipe(first()).subscribe(data => console.log(data));
    */

    const cid = +category.split('|')[0];
    const path = `${environment.apiAlbumUrl}/${environment.album_path}/add?categoryId=` + cid + '&userId=' + id + '&title=' + name;

    return this.http.get<any>(path).subscribe(data => window.location.reload());
  }
}
