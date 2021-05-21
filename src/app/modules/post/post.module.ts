import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { PostResolver } from "src/app/core/resolvers/post.resolver";
import { ButtonAddModule } from "src/app/shared/components/button-add/button-add.module";
import { ButtonModule } from "src/app/shared/components/button/button.module";
import { PostComponent } from "./page/post/post.component";


@NgModule({
  declarations: [
    PostComponent
  ],
  imports:[
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    ButtonAddModule,
    RouterModule.forChild([
      {
        path: 'post/:id', 
        component: PostComponent,
        resolve: {
          post: PostResolver
        }
      }
    ])
  ]
})
export class PostComponentModule {

}