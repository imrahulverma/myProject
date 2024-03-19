import { Component } from '@angular/core';
import { HttpServiceService } from '../services/http/http-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
  constructor(private _http: HttpServiceService, private route: ActivatedRoute) {

  }
  videoList: any;
  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      console.log(res)
      this.getAllVideos(res['username'])
    })
  }

  getAllVideos(username: string) {
    let apiUrl = `Videos/video/${username}`;

    this._http.GetData(apiUrl).subscribe(res => {
      if (res['success']) {
        this.videoList = res['ResponseObject'].data
      } else {
        
      }

    })
  }
}
