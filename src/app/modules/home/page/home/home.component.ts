import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/post.service';

//разметку вынес сюда что бы не делать доп файлы, поскольку кода мало.
@Component({
  selector: 'app-home',
  template: `
    <app-button-add></app-button-add>
    <h1 class="blog">Блог</h1>
    <app-posts></app-posts>
  `,
  styles: [`
    .blog{
      margin-left: 50%;
      transform: translate(-35px);
      margin-bottom: 50px;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor(private postsService: PostsService) { }  

  ngOnInit(): void {
  }

}

