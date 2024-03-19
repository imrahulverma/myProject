import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ChannelComponent } from './channel/channel.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './services/Interceptor/http.interceptor';
import { VideosComponent } from './videos/videos.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { TweetsComponent } from './tweets/tweets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ChannelComponent,
    LoginComponent,
    VideosComponent,
    PlaylistComponent,
    TweetsComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatGridListModule,
    ToastrModule.forRoot(), 
    
    // AgmCoreModule.forRoot({
    //   please get your own API key here:
    //   https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
    //   apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    // })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
