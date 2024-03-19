import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpServiceService } from '../services/http/http-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from '../services/alert/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() isUserLoggedIn: EventEmitter<any> = new EventEmitter<any>();
  constructor(public _http: HttpServiceService, public fb: FormBuilder,private alert: AlertService, private route: Router) {
  }

  loginForm: FormGroup

  ngOnInit(): void {
    this.LoginForm()
  }

  LoginForm() {
    this.loginForm = this.fb.group({
      email: [''],
      username: [''],
      password: ['']
    })
  }

  login() {
    let formdata = this.loginForm.getRawValue()
    let payload = {
      email: formdata.email,
      username: formdata.username,
      password: formdata.password
    }

    let apiUrl = "users/login";

    this._http.PostData(apiUrl, payload).subscribe(res => {
      if (res['success']) {
        let user = (res["ResponseObject"])
        localStorage.setItem("AccessToken",user.accessToken)
        this.isUserLoggedIn.emit(true)
        this.route.navigate(['/'])
      } else {
        this.alert.toaster("error",res['ResponseMessage'])
      }

    })
  }
}


export class LoginPayload {


}