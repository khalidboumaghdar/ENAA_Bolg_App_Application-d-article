import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detaill',
  templateUrl: './detaill.component.html',
  styleUrls: ['./detaill.component.css']
})
export class DetaillComponent implements OnInit {
  posts: Post[] = [];
  postDetails: Post | null = null;  
  postId: number = 0;  
  imageUrl: string = '';
  constructor(private postService: PostService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadPosts();
    this.loadPostDetails();
  }

  loadPosts() {
    this.postService.getPosts().subscribe(data => this.posts = data);
  }

  loadPostDetails() {
    this.route.params.subscribe(params => {
      console.log('Raw post ID:', params['id']);
      
      this.postId = params['id'];
      console.log('Post ID:', this.postId);
  
      if (this.postId) {
        this.postService.getPostById(this.postId).subscribe(
          data => {
            this.postDetails = data;
            this.imageUrl='assets/images/image.png'
          },
          error => {
            console.error('Error loading post details:', error);
          }
        );
      } else {
        console.error('Invalid post ID:', this.postId);  
      }
    });
  }
  
  
  

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(() => this.loadPosts());
  }
}
