import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../services/http/http-service.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css',]
})
export class ChannelComponent implements OnInit{
  constructor(private route: ActivatedRoute, private _http: HttpServiceService ) {

  }
  ngOnInit(): void {
    let username: string ;
    this.route.params.subscribe(res=>{
    console.log(res)
    this.getChannelData(res['username'])
  })

  }
channelData: any;
  getChannelData(username:string) {
    let apiUrl = `users/c/${username}`;

    this._http.GetData(apiUrl).subscribe(res => {
      if (res['success']) {
        this.channelData = res['ResponseObject']
      } else {
       
      }

    })
  }
currentTab: number = 1
  showTab(tab: number) {
    this.currentTab = tab
  }

}
