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
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';
import {ReportListComponent} from "./report-list/report-list.component";



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
  {path: 'reports', component: ReportListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
