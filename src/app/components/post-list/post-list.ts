import { Component } from '@angular/core';
import { PostCard } from '../post-card/post-card';

@Component({
  selector: 'app-post-list',
  imports: [PostCard],
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss'
})
export class PostList {
  onLiked() {
    console.log('%c' + 'Liked', 'color: blue; font-weight: bold;');
  }
}
