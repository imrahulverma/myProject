import { Component } from '@angular/core';
import { NgxSpinner, NgxSpinnerService, Spinner } from 'ngx-spinner';
import { HttpServiceService } from 'src/app/services/http/http-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../../../../libs/assets/css/common.css']
})
export class HeaderComponent {

  constructor(private http:HttpServiceService) {
// this.http.GetData("api/jokes").subscribe(res =>{
//   console.log(res)
// })
  }

  


}
