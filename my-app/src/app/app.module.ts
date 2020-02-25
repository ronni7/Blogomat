import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TestComponent} from './components/test/test.component';
import {AboutComponent} from './views/about/about.component';
import {MainPageComponent} from './views/main-page/main-page.component';
import {LoginPageComponent} from './views/login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RegisterPageComponent} from './views/register-page/register-page.component';
import {FormErrorComponent} from './components/form-error/form-error.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FooterComponent} from './components/footer/footer.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {ManagementComponent} from './views/management/management.component';
import {AddPostComponent} from './views/add-post/add-post.component';
import {PostPreviewComponent} from './components/post-preview/post-preview.component';
import {PostsComponent} from './components/posts/posts.component';
import {SearchPostsComponent} from './components/search-posts/search-posts.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {ProfileComponent} from './views/profile/profile.component';
import {DatePipe} from '@angular/common';
import {SocialMediaComponent} from './components/social-media/social-media.component';
import {CommentSectionComponent} from './components/comment-section/comment-section.component';
import {ReportPostComponent} from './components/report-post/report-post.component';
import {SettingsComponent} from './views/settings/settings.component';
import {ReportListComponent} from './views/report-list/report-list.component';
import {ReportPreviewComponent} from './components/report-preview/report-preview.component';
import {ModalInfoComponent} from './views/modal-info/modal-info.component';
import {SliderComponent} from './components/slider/slider.component';
import {AdminComponent} from './views/admin/admin.component';
import {ContactMessageListComponent} from './views/contact-message-list/contact-message-list.component';
import {ContactPreviewComponent} from './components/contact-preview/contact-preview.component';
import {ContextService} from '../service/context.service';

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
    SearchBarComponent,
    ProfileComponent,
    SocialMediaComponent,
    CommentSectionComponent,
    ReportPostComponent,
    SettingsComponent,
    ReportListComponent,
    ReportPreviewComponent,
    ModalInfoComponent,
    SliderComponent,
    AdminComponent,
    ContactMessageListComponent,
    ContactPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [DatePipe, ContextService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
