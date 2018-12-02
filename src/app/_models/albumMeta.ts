import {User} from './user';

export class AlbumMeta { //album
  private _album_id: number;
  private _album_title: string;
  private _user_id: number;
  private _category_id: number;
  private _user: User;
  private _seq_nr: number;


  get album_id(): number {
    return this._album_id;
  }

  set album_id(value: number) {
    this._album_id = value;
  }

  get album_title(): string {
    return this._album_title;
  }

  set album_title(value: string) {
    this._album_title = value;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get category_id(): number {
    return this._category_id;
  }

  set category_id(value: number) {
    this._category_id = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get seq_nr(): number {
    return this._seq_nr;
  }

  set seq_nr(value: number) {
    this._seq_nr = value;
  }
}
