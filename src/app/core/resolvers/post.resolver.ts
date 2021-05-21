import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve} from "@angular/router";
import { Observable } from "rxjs";
import { PostsService } from "../services/post.service";

//проброс информации до загрузки
@Injectable({providedIn: "root"})
export class PostResolver implements Resolve<any>{
  constructor(private postsService: PostsService){}
  public resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    return this.postsService.getById(+route.params['id']);
  }  
}
