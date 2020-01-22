import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {MainPageComponent} from './views/main-page/main-page.component';
import {LoginPageComponent} from './views/login-page/login-page.component';
import {AboutComponent} from './views/about/about.component';
import {RegisterPageComponent} from './views/register-page/register-page.component';
import {ManagementComponent} from './views/management/management.component';
import {PostPreviewComponent} from './post-preview/post-preview.component';
import {PostsComponent} from './posts/posts.component';
import {ProfileComponent} from './views/profile/profile.component';
import {SettingsComponent} from './views/settings/settings.component';
import {AdminComponent} from './views/admin/admin.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'test', component: AppComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'management', component: ManagementComponent},
  {path: 'preview', component: PostPreviewComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'account', component: ProfileComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
