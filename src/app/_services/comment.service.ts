import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {Album} from '../_models/album';

@Injectable()
export class CommentService {
  constructor(private http: HttpClient) {
  }

  getCommentForPost() {
    return this.http.get<Comment[]>(`http://localhost:3000/commenForPost`);
  }
}
