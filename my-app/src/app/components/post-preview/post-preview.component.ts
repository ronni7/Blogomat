import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Post} from '../../../model/Post';
import {TestHttpServiceService} from '../../../service/test-http-service.service';
import {Comment} from '../../../model/Comment';
import {SocialMedia} from "../../../model/SocialMedia";

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
  alreadyReported = false;
  likes = 0;
  addCommentVisible = false;
  commentContent: string;
  addingCommentFailed = false;
  socialMedia: SocialMedia;
  adminBack = false;
  @Output() reload = new EventEmitter<boolean>();


  constructor(private router: Router, private httpService: TestHttpServiceService) {

    this.commentCount = this.comments.length;
    if (this.router.getCurrentNavigation()) {
      if (this.router.getCurrentNavigation().extras.state) {
        if (!this.router.getCurrentNavigation().extras.state.postID) {
          this.data = this.router.getCurrentNavigation().extras.state.data as Post;
          this.backVisible = this.router.getCurrentNavigation().extras.state.back as boolean;
        } else if (this.router.getCurrentNavigation().extras.state.postID) {
          this.httpService.getPostByID(this.router.getCurrentNavigation().extras.state.postID).subscribe(response => {
            if (response) {
              this.data = response as Post;
              this.adminBack = true;
              this.expanded = true;
            }
          });
        }
      }
    }

  }

  ngOnInit() {
    if (this.data && !this.backVisible) {
      this.contentHidden();
      this.getLikes(this.data.id);
      this.getComments(this.data.id);
      this.getSocialMedia(this.data.author);
    }
  }

  backToAdmin() {
    return this.router.navigate(['/admin']);
  }

  back() {
    return this.router.navigate(['/management'], {
      state: {data: this.data, retrieveData: true, actionID: 1}
    });

  }

  searchCurrentTag(tag: string) {
    if (this.backVisible)
      return;
    return this.router.navigate(['/'], {
      state: {searchTag: tag, selectedAction: 3}
    });

  }

  likePost() {
    if (this.backVisible)
      return;
    this.httpService.likePost(this.data.id, 1).subscribe(response => {

      this.getLikes(this.data.id);
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
      state: {edit: false, userID: this.socialMedia.userID}
    });

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
    if (this.backVisible)
      return;
    this.commentContent = '';
    this.addCommentVisible = !this.addCommentVisible;
  }

  toggleCommentFailed() {
    this.addingCommentFailed = !this.addingCommentFailed;
  }

  addComment() {
    if (this.commentContent && this.commentContent.length > 1 && this.commentContent.length < 255) {
      this.httpService.addComment(new Comment(this.data.id, new Date(), this.data.author, this.commentContent))
        .subscribe(response => {
          this.getComments(this.data.id);
          this.toggleAddComment();
        });
    } else {
      this.toggleCommentFailed();
    }
  }

  getSocialMedia(author: string) {
    this.httpService.getUserSocialMedia(author).subscribe(response => {
      if (response) {
        this.socialMedia = response as SocialMedia;
      }
    });
  }
}
