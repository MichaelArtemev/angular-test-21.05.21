import { Component, OnInit, DoCheck } from '@angular/core';
import { PostsService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, DoCheck {

  public totalLength: any;
  public page: number = 1;

  constructor(public postsService: PostsService) { }

  ngOnInit(): void{
    this.totalLength = this.postsService.posts.length;
  }
  public reRender(){
    this.ngOnInit();    
  }
  //мануально перерисовываю компонет для фикса бага при введенной пагинации
  public ngDoCheck(){
    this.reRender()
  }

}
