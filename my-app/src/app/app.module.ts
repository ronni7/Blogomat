import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AboutComponent } from './about/about.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormErrorComponent } from './form-error/form-error.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { FooterComponent } from './footer/footer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ManagementComponent } from './management/management.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { PostsComponent } from './posts/posts.component';
import { SearchPostsComponent } from './search-posts/search-posts.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AboutComponent,
    MainPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    FormErrorComponent,
    FooterComponent,
    UserProfileComponent,
    ManagementComponent,
    AddPostComponent,
    PostPreviewComponent,
    PostsComponent,
    SearchPostsComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
