import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CommentService} from '../_services/comment.service';
import {elementEnd} from '@angular/core/src/render3';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent implements OnInit {

  public likenum = 0;
  public commentMsg = 'cyka';
  public specificComments: Comment[];

  constructor(route: ActivatedRoute, private commentService: CommentService) {

    /*
    const id: Observable<string> = route.params.pipe(map(p => p.id));
    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
    // route.data includes both `data` and `resolve`
    const user = route.data.pipe(map(d => d.user));

    const mock = route.queryParams.pipe(map( q => q.a));

    mock.subscribe(data => console.log(data));*/

    this.commentService.getCommentForPost().subscribe(data => this.specificComments = data);

  }

  ngOnInit() {
  }

}

