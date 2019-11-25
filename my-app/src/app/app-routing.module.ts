import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {MainPageComponent} from './main-page/main-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AboutComponent} from './about/about.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {ManagementComponent} from './management/management.component';
import {PostPreviewComponent} from './post-preview/post-preview.component';
import {PostsComponent} from './posts/posts.component';



const routes: Routes = [
  {path: 'main', component: MainPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'test', component: AppComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'management', component: ManagementComponent},
  {path: 'preview', component: PostPreviewComponent},
  {path: 'posts', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
