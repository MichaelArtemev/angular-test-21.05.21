import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentModule } from './modules/home/home.module';
import { PostComponentModule } from './modules/post/post.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponentModule,
    PostComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
