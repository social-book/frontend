import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CommentService} from '../_services/comment.service';
import {Comment} from '../_models/comment';
import {User} from '../_models';
import {SharedDataService} from '../shared-data.service';
import {UserService} from '../_services';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})

export class ViewImageComponent implements OnInit {

  public likenum: number;
  public fact: string;
  public commentMsg = 'cyka';
  public specificComments: CommentWithUser[];
  public id: number;
  public user: User;
  loadedImg: string;

  constructor(route: ActivatedRoute, private commentService: CommentService,
              private us: UserService, private sd: SharedDataService) {

    this.user = this.sd.getLoggedInUser();
    this.us.getById(this.user.userId).subscribe(data => this.user = data);


    /*
    const id: Observable<string> = route.params.pipe(map(p => p.id));
    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
    // route.data includes both `data` and `resolve`
    const user = route.data.pipe(map(d => d.user));

    const mock = route.queryParams.pipe(map( q => q.a));

    mock.subscribe(data => console.log(data));*/

    route.queryParams.pipe(map(p => p.id)).subscribe(item => this.id = item);
    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
    // route.data includes both `data` and `resolve`
    const user = route.data.pipe(map(d => d.user));

    // const mock = route.queryParams.pipe(map(q => q.a));

    // mock.subscribe(data => console.log(data));

    console.log('ID: ' + this.id);
    this.commentService.getCommentForPost(this.id).subscribe(data => {
      const comments = data;
      const list = [];
      for (let i = 0; i < data.length; i++) {
        const commentdata = new CommentWithUser();
        commentdata.album_id = data[i].album_id;
        commentdata.comment_content = data[i].comment_content;
        commentdata.user_id = data[i].user_id;
        commentdata.comment_id = data[i].comment_id;

        this.us.getById(commentdata.user_id).subscribe((dat => {
          commentdata.imgref = dat.imgref;
          commentdata.userName = dat.username;
        }).bind(commentdata));

        list.push(commentdata);
      }

      this.specificComments = list;
    });
    this.commentService.getLikesForPost(this.id).subscribe((data => {
      console.log(JSON.stringify(data) + ' ------------------ ');

      this.fact = 'No fact has yet been said';

      try {

        let pair = data[0].likeAmount;

        if (pair === undefined) {
          this.likenum = 0;
          this.fact = 'No fact has yet been said';
        }

        pair = pair.split('|');
        this.likenum = +pair[0].replace(' ', '');
        if (pair.length > 1) {
          this.fact = pair[1];
        }
        if (data[0].likeAmount === undefined) {
          this.likenum = 0;
        }
      } catch (e) {
        this.likenum = 0;
      }
    }).bind(this));
    this.commentService.getCommentForPost(this.id).subscribe(data => console.log(data));

    this.loadedImg = `${environment.apiImageUrl}/images` + '?imageId=' + this.id;

  }

  ngOnInit() {
  }

  like() {
    this.commentService.likePostWithGet(this.id, this.user.userId).subscribe((dost) => console.log(dost));
    /*this.commentService.likePost(this.id, this.user.userId).pipe(map(gg => {
     return gg;
   })).subscribe((dost) => console.log(dost)); */
    window.location.reload();
  }

  postComment() {
    const commentValue = (<HTMLInputElement>document.getElementById('commentVal')).value;
    console.log('Value of comment: ' + commentValue);
    this.commentService.postCommentWithGet(this.id, this.user.userId, commentValue).subscribe(xa => console.log(xa));
    // this.commentService.postComment(this.id, this.user.userId, commentValue).subscribe(xa => console.log(xa));
    window.location.reload();
  }
}

class CommentWithUser extends Comment {
  public imgref;
  public userName;
}
