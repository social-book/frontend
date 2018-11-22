import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {Album} from '../_models/album';

@Injectable()
export class AlbumService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Album[]>(`${environment.apiUrl}/${environment.album_path}`);
  }

  getAllMock() {
    return this.http.get<Album[]>('http://localhost:3000/allalbums');
  }


  //// https://demo4582227.mockable.io/albumsandimgs ... updejti vsake 24 ur
  getAlbumsWithImagesMock() {
    return this.http.get('http://localhost:3000/albumsandimgs');
  }

  //// http://demo4582227.mockable.io ... updejti vsake 24 ur
  getImagesFromAlbumMock() {
    return this.http.get('http://localhost:3000/images');
  }

  getFriendsAlbums(ids: number[]) {
    const albums = [];
    for (let i = 0; i < ids.length; i++) {
      albums.push(this.getByUserId(ids[i]));
    }
    return albums;
  }

  getByUserId(id: number) {
    return this.http.get<Album[]>(`${environment.apiUrl}/${environment.album_path}/${id}`);
  }


  getfirendAlbumsMock(id: number) {
    return this.http.get<Album[]>('http://localhost:3000/images');
  }

  /*

  getByName(name: string) {
  }

  update(user: User) {
  }

  delete(id: number) {
  }

  */
}
