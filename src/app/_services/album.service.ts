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
    return this.http.get<Album[]>(`https://my-json-server.typicode.com/mihastele/myJsonMock/albums`);
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

  /*

  getByName(name: string) {
  }

  update(user: User) {
  }

  delete(id: number) {
  }

  */
}
