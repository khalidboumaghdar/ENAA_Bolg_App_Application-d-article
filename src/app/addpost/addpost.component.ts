import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent {
  newPost = { title: '', content: '' };  

  constructor(private route: Router, private postService: PostService) { }
 

  addPost() {
    if (this.newPost.title && this.newPost.content) {
      this.postService.addPost(this.newPost).subscribe(response => {
        console.log('Article ajouté avec succès:', response);
        alert('Article ajouté avec succès!');
        this.route.navigate(['/']);
      }, error => {
        console.error('Erreur lors de l\'ajout de l\'article:', error);
        alert('Erreur lors de l\'ajout de l\'article');
      });
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }

  deletePost(id: number ) {
    if (id !== undefined && id !== null) {
      this.postService.deletePost(id).subscribe(response => {
        console.log('Article supprimé avec succès');
      }, error => {
        console.error('Erreur lors de la suppression de l\'article:', error);
      });
    } else {
      console.log('ID non défini ou invalide');
    }
  }
}
