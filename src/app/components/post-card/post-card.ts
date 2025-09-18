import { ChangeDetectionStrategy, Component, EventEmitter, input, output } from '@angular/core';
import { Highlight } from '../../services/highlight';
import { NgClass } from '@angular/common';
import { Post } from "../post/post";

@Component({
  selector: 'app-post-card',
  exportAs: 'postCard',
  imports: [NgClass, Post],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['title', 'content'],
  outputs: ['liked'],
  providers: [Highlight],
  host: {
  '(click)': 'onCardClick()',
  '[class.active]': 'isActive'
},
interpolation: ['[[', ']]']
})
export class PostCard {
  title!: string;
  content!: string;
  // title = input.required();
  // content = input.required();
  // liked = output();
  liked: EventEmitter<void> = new EventEmitter<void>();

  isActive = false;

  constructor(private highlight: Highlight) { }

  onCardClick() {
    this.isActive = !this.isActive;
    this.highlight.log(`Card clicked: ${this.title}`);
  }

  onLike(event: Event) {
    event.stopPropagation();
    this.liked.emit();
  }
}
