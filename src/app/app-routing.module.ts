import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChannelComponent } from './channel/channel.component';
import { LoginComponent } from './login/login.component';
import { VideosComponent } from './videos/videos.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

const routes: Routes = [
  {path: "" ,  component: HomeComponent},
  {path: "Channel/:username" ,  component: ChannelComponent},
  {path: "Login" ,  component: LoginComponent},
  {path: "Video" ,  component: VideosComponent},
  {path: "Video/:id" ,  component: VideoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
