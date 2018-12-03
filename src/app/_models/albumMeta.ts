import {User} from './user';
import {Category} from './category';
import {Image} from './image';

export class AlbumMeta {
  private _id: number;
  private _title: string;
  private _user_id: number;
  private _category: Category;
  private _user: User;
  private _seq_nr: number;
  private _images: Image[];


  get images(): Image[] {
    return this._images;
  }

  set images(value: Image[]) {
    this._images = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get album_title(): string {
    return this._title;
  }

  set album_title(value: string) {
    this._title = value;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get category_id(): Category {
    return this._category;
  }

  set category_id(value: Category) {
    this._category = value;
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
