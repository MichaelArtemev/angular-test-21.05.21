import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./page/home/home.component";
import { PostsComponent } from './components/posts/posts.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ButtonAddModule } from "src/app/shared/components/button-add/button-add.module";
import { ButtonModule } from "src/app/shared/components/button/button.module";


@NgModule({
  declarations: [
    HomeComponent,
    PostsComponent
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    ButtonAddModule,
    ButtonModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ])
  ],
  exports: [RouterModule]
})
export class HomeComponentModule {

}