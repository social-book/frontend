import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CommentService} from '../_services/comment.service';
import {Comment} from '../_models/comment';
import {User} from '../_models';
import {SharedDataService} from '../shared-data.service';
import {UserService} from '../_services';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent implements OnInit {

  public likenum = 0;
  public commentMsg = 'cyka';
  public specificComments: Comment[];
  public id: number;
  public user: User;

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

    const mock = route.queryParams.pipe(map(q => q.a));

    mock.subscribe(data => console.log(data));

    console.log('ID: ' + this.id);
    this.commentService.getCommentForPost(this.id).subscribe(data => this.specificComments = data);
    this.commentService.getLikesForPost(this.id).subscribe(data => this.likenum = data.count);
    this.commentService.getCommentForPost(this.id).subscribe(data => console.log(data));

  }

  ngOnInit() {
  }

  like() {

  }

  postComment() {
    // const commentValue = <HTMLInputElement>document.getElementById("commentValue").innerText();
    console.log('Value of comment: ' + commentValue);
    this.commentService.postComment(this.id, this.user.userId, commentValue);
  }
}

