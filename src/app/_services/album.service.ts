import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';
import {Album} from '../_models/album';

@Injectable()
export class AlbumService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Album[]>(`${environment.apiUrl}/${environment.album_path}`);
    }

    getFriendsAlbums() {
      return this.http.get<Album[]>(`${environment.apiUrl}/${environment.album_path}`);
    }

    getByUserId(id: number) {
      return this.http.get<Album[]>(`${environment.apiUrl}/${environment.album_path}/${id}`);
    }

    getById(id: number) {
      return this.http.get<Album[]>(`${environment.apiUrl}/${environment.album_path}/${id}`);
    }

    getByName(name: string) {
    }

    update(user: User) {
    }

    delete(id: number) {
    }
}
