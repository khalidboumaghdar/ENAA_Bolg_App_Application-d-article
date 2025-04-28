import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { AddpostComponent } from './addpost/addpost.component'; 
import { FormsModule } from '@angular/forms';
import { ToppostComponent } from './toppost/toppost.component';
import { DetaillComponent } from './detaill/detaill.component'; 


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    PostComponent,
    AddpostComponent,
    ToppostComponent,
    DetaillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
