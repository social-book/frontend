import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {Album} from '../_models/album';

@Injectable()
export class CommentService {
  constructor(private http: HttpClient) {
  }

  getCommentForPost() {
    return this.http.get<Comment[]>(`http://localhost:3000/commentsForPost`);
  }


  getMock() {
    return this.http.get(`http://77.111.11.122/socialbook/v1/user-service/users/v1/users`);
  }


  getLikesForPost() {
    return this.http.get<LikeNumber>(`http://localhost:3000/likesForPost`);
  }

}

export class LikeNumber {
  count: number;
  imageId: number;
}
