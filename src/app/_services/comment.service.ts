import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {Comment} from '../_models/comment';
import {Image} from '../_models/image';

@Injectable()
export class CommentService {
  constructor(private http: HttpClient) {
  }

  getCommentForPost(imageId: number) {
    return this.http.get<Comment[]>(`${environment.apiCommentUrl}` + '/' + `${environment.comment_path}/` + imageId);
  }

  getLikesForPost(imageId: number) {
    console.log(`CALLING:  ${environment.apiCommentUrl}/${environment.like_path}/` + imageId);
    return this.http.get<LikeNumber[]>(`${environment.apiCommentUrl}/${environment.like_path}/` + imageId);
  }

  postComment(imageId: number, userId: number, message: string) {
    const body = {
      'image_id': imageId,
      'comment_content': message,
      'user_id': userId
    };

    console.log(body);
    console.log(`CALLING:  ${environment.apiCommentUrl}` + '/' + `${environment.comment_path}/`);
    console.log('WITH BODY: ' + JSON.stringify(body));
    return this.http.post(`${environment.apiCommentUrl}` + '/' + `${environment.comment_path}/`, body);

  }


  likePost(imageId: number, userId: number) {
    console.log(`CALLING:  ${environment.apiCommentUrl}` + '/' + `${environment.like_path}/` + imageId);
    return this.http.put(`${environment.apiCommentUrl}` + '/' + `${environment.like_path}/` + imageId, null);
  }

  /*getImage(imageId: number) {
    return this.http.get<Image>(`${environment.apiImageUrl}/images` + '?imageId=' + imageId);
  }

  /*
  getMock() {
    return this.http.get(`http://77.111.11.122/socialbook/v1/user-service/users/v1/users`);
  }*/

}

export class LikeNumber {
  image_id: number;
  likeAmount: number;
  likeId: number;
}
