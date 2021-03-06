﻿import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// used to create fake backend

import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {AlertComponent} from './_directives';
import {AuthGuard} from './_guards';
import {AlertService, AuthenticationService, UserService} from './_services';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ProfileComponent} from './profile/profile.component';
import {FindpeopleComponent} from './findpeople/findpeople.component';
import {AddimageComponent} from './addimage/addimage.component';
import {MaintainancemodeComponent} from './maintainancemode/maintainancemode.component';
import {AlbumService} from './_services/album.service';
import {SharedDataService} from './shared-data.service';
import {ViewImageComponent} from './view-image/view-image.component';
import {CommentService} from './_services/comment.service';;
import { TestRequestComponent } from './test-request/test-request.component'

;

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    ProfileComponent,
    FindpeopleComponent,
    AddimageComponent,
    MaintainancemodeComponent,
    ViewImageComponent,
    TestRequestComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    AlbumService,
    SharedDataService,
    CommentService
    /*{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}, //keep refreshing
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},*/

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
