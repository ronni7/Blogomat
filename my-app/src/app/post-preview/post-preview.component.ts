import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Post} from '../../model/Post';
import {Location} from '@angular/common';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {
  @Input()
  data: Post;
  backVisible = false;

  constructor(private router: Router, private location: Location) {
    if (this.router.getCurrentNavigation()) {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data as Post;
        this.backVisible = this.router.getCurrentNavigation().extras.state.back as boolean;

      }
    }/* else {
      this.data = new Post('title', ['tag1', 'tag2', 'tag3'], null, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.');
    }*/
  }

  ngOnInit() {
  }

  back() {
    return this.router.navigate(['/management'], {
      state: {data: this.data, retrieveData: true, actionID: 1}
    });

  }

  searchCurrentTag(tag: string) {
    console.log(tag, ' to jest tagk po ktorym bedziemy szukac');
    return this.router.navigate(['/'], {
      state: {searchTag: tag, selectedAction: 3}
    });

  }

  getLikes(title: string): number {
    return Math.round(Math.random() * 10);
  }

  likePost(postID: number) {
    console.log('works');
  }
}
