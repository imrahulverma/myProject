import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../services/http/http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _http: HttpServiceService) {

  }
  videoList: any;
  ngOnInit(): void {
    this.getAllVideos()
  }

  getAllVideos() {
    let apiUrl = `videos/`;

    this._http.GetData(apiUrl).subscribe(res => {
      if (res['success']) {
        this.videoList = res['ResponseObject'].data
      } else {

      }

    })
  }
}
