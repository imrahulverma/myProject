import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../services/http/http-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  constructor(private http: HttpServiceService, private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      this.getIdFromUrl = params['id']
    })
  }
  getIdFromUrl: string;
  videoDetail: any;
  userData: any

  ngOnInit(): void {
    this.getVideoDetail()
  }

  getVideoDetail() {
    const id = this.getIdFromUrl
    let apiUrl = `videos/${id}`;

    this.http.GetData(apiUrl).subscribe(res => {
      if (res['success']) {
        this.videoDetail = res['ResponseObject'].data
        this.userData = this.videoDetail?.userData[0]
        console.log(this.videoDetail)

      } else {
        
      }

    })
   
  }

}
