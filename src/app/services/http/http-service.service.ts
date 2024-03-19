import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient, private spinner :NgxSpinnerService) {

   }


  public GetData(apiUrl: string, showSpinner = true): Observable<any> {
    if (showSpinner) this.spinner.show()
    return this.http.get(environment.baseUrl + apiUrl).pipe(
      tap((data) => {
        this.spinner.hide()
        return data;
      }),

    );
  }

  public PostData(apiUrl: string,data:any, showSpinner = true): Observable<any> {
    if (showSpinner) this.spinner.show()
    return this.http.post(environment.baseUrl + apiUrl, data).pipe(
      tap((data) => {
        this.spinner.hide()
        return data;
      }),

    );
  }
   
}
