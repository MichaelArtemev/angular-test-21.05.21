import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//я хотел сделать модульность ради LaziLoading,и изменения стратегии загрузки но на данный момент не справился.
const routes: Routes = [  
  // {path: 'post/:id', loadChildren: './modules/post/post.module#PostComponentModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
