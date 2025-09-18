import { Component } from '@angular/core';

@Component({
  selector: '.yt-post',
  exportAs: 'post-cmp',
  imports: [],
  template: `<h1>Post Component</h1>`,
  // templateUrl: './post.html',
  // styleUrl: './post.scss'
  styles: [`
  h1 {
    color: blue
  }
    `]
})
export class Post {

}
