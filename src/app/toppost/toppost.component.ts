import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-toppost',
  templateUrl: './toppost.component.html',
  styleUrls: ['./toppost.component.css']
})
export class ToppostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe(data => this.posts = data);
  }

}
