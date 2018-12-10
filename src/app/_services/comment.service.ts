import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {Comment} from '../_models/comment';

@Injectable()
export class CommentService {
  constructor(private http: HttpClient) {
  }

  getCommentForPost(imageId: number) {
    return this.http.get<Comment[]>(`${environment.apiCommentUrl}` + '/' + `${environment.comment_path}/` + imageId);
  }

  getLikesForPost(imageId: number) {
    return this.http.get<LikeNumber>(`${environment.apiCommentUrl}` + '/' + `${environment.like_path}`);
  }

  postComment(imageId: number, userId: number, message: string) {
    const body = {
      'image_id': imageId,
      'comment_content': message,
      'user_id': userId
    };

    console.log(body);
    return this.http.post(`${environment.apiCommentUrl}` + '/' + `${environment.comment_path}/` + imageId, body);

  }


  likePost(imageId: number, userId: number) {
    return this.http.put(`${environment.apiCommentUrl}` + '/' + `${environment.like_path}`, null);
  }

  /*
  getMock() {
    return this.http.get(`http://77.111.11.122/socialbook/v1/user-service/users/v1/users`);
  }*/

}

export class LikeNumber {
  count: number;
  imageId: number;
}
