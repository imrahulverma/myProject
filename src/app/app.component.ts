import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, of, range } from 'rxjs';
import { HttpServiceService } from './services/http/http-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private spinner :NgxSpinnerService,private http: HttpClient, private _http: HttpServiceService) {

  }

  checkLogin(evt:any) {
    this.isLoggedIn = evt
  }

isLoggedIn: boolean = false
  ngOnInit() {
    this.isUserLoggedIn()
  }

 public isUserLoggedIn() {
    let payload ={}
    let apiUrl = "users/current-user"
    this._http.PostData(apiUrl,payload).subscribe(res =>{
        if(res['success']) {
          this.isLoggedIn = true
        } else {
          this.isLoggedIn = false
        }
      })
  }


}
