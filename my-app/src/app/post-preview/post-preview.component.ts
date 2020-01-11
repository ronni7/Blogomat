import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Post} from '../../model/Post';
import {TestHttpServiceService} from '../test-http-service.service';
import {Comment} from '../../model/Comment';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {
  @Input()
  data: Post;
  comments: Comment[] = new Array<Comment>(); // mock
  backVisible = false;
  commentsDropped = false;
  commentCount = 0;
  reportVisible = false;
  expanded = false;
  private alreadyReported = false;
  likes: number = 0;
  private addCommentVisible: boolean = false;
  commentContent: string;
  addingCommentFailed: boolean = false;


  constructor(private router: Router, private httpService: TestHttpServiceService) {

    this.commentCount = this.comments.length;
    if (this.router.getCurrentNavigation()) {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data as Post;
        this.backVisible = this.router.getCurrentNavigation().extras.state.back as boolean;
      }
    }

 }

  ngOnInit() {
    if (this.data) {
      this.contentHidden();
      this.getLikes(this.data.id);
      this.getComments(this.data.id);

    }
  }

  back() {
    return this.router.navigate(['/management'], {
      state: {data: this.data, retrieveData: true, actionID: 1}
    });

  }

  searchCurrentTag(tag: string) {
    return this.router.navigate(['/'], {
      state: {searchTag: tag, selectedAction: 3}
    });

  }

  likePost() {
    console.log('click works');
    this.httpService.likePost(this.data.id, 1).subscribe(response => {
      if (response) {
        console.log('like works: response is', response);
        this.likes++; //todo remove xd
        //gray the like icon bro
      }
    });
  }

  dropComments() {
    this.commentsDropped = !this.commentsDropped;
  }

  toggleReport($event?: any) {

    if ($event instanceof MouseEvent) {
      $event.stopPropagation();
    } else {
      this.alreadyReported = $event;
    }
    this.reportVisible = !this.reportVisible;
  }

  expand() {
    this.expanded = true;
  }

  contentHidden(): void {
    this.expanded = this.data.postContent.length <= 255;
  }

  navigateToAuthorProfile() {
    return this.router.navigate(['/account'], {
      state: {edit: false}
      //  todo state: {edit: this.data.author}
    });/*this.data.author === this.userService.getLoggedUser()*/

  }

  getLikes(postID: number) {
    this.httpService.getLikes(postID).subscribe(response => {
      this.likes = response;
    });
  }

  private getComments(id: number) {
    this.httpService.getComments(id).subscribe(response => {
      this.comments = response;
      this.commentCount = this.comments && this.comments[0] ? this.comments.length : 0;
    });
  }

  toggleAddComment() {
    this.addCommentVisible = !this.addCommentVisible;
    console.log(this.addCommentVisible);
  }

  toggleCommentFailed() {
    this.addingCommentFailed = !this.addingCommentFailed;
  }

  addComment() {
    if (this.commentContent && this.comments.length > 1 && this.comments.length < 255) {
      this.httpService.addComment(new Comment(this.data.id, new Date(), this.data.author, this.commentContent))
        .subscribe(response => {

          this.toggleAddComment();
        });
    } else {
      this.toggleCommentFailed();
    }
  }

}
