import {Injectable} from '@angular/core'
import { Post } from '../interfaces/interfaces';
import { mockArray } from '../mocks/post-mock-data';



@Injectable({providedIn: 'root'})
export class PostsService {
  public posts: Post[] = mockArray;

  public getById(id: number) {
    return this.posts.find(el => el.id === id)
  }  
  public deletePost(id: number) {
    //пробегаюсь по массиву
    this.posts.forEach((el, index) => {
      if (el.id == id) {
        this.posts.splice(index, 1)
      }
    })
  }
  public changePost(data: Post, id: number) {
    this.posts.forEach((el) => {
      if(el.id === id){
        el.title = data.title;
        el.text = data.text;
      }
    })    
  }
}