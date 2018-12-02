import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {Album} from '../_models/album';
import {Category} from '../_models/category';

@Injectable()
export class AlbumService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Album[]>(`${environment.apiAlbumUrl}/${environment.album_path}`);
  }


  getFriendsAlbums(ids: number[]) {
    const albums = [];
    this.getAll().subscribe((data =>
      data.forEach(item => {
        if (ids.includes(item.id)) {
          albums.push(item);
        }
      }).bind(this).bind(albums)).bind(this).bind(albums));
    return albums;

    /*const albums = [];
    for (let i = 0; i < ids.length; i++) {
      albums.push(this.getByUserId(ids[i]));
    }
    return albums;*/
  }

  getCategories() {
    return this.http.get<Category[]>(`${environment.apiAlbumUrl}/${environment.album_path}/${environment.category_path}`);
  }

  getByUserId(id: number) {
    return this.http.get<Album[]>(`${environment.apiUrl}/${environment.album_path}/${id}`);
  }


  getAllMock() {
    return this.http.get<Album[]>('http://localhost:3000/allalbums');
  }


  /*

  getByName(name: string) {
  }

  update(user: User) {
  }

  delete(id: number) {
  }

  */

  //// https://demo4582227.mockable.io/albumsandimgs ... updejti vsake 24 ur
  getAlbumsWithImagesMock() {
    return this.http.get('http://localhost:3000/albumsandimgs');
  }

  //// http://demo4582227.mockable.io ... updejti vsake 24 ur
  getImagesFromAlbumMock() {
    return this.http.get('http://localhost:3000/images');
  }

  getfirendAlbumsMock(id: number) {
    return this.http.get<Album[]>('http://localhost:3000/friendalbs');
  }

}
