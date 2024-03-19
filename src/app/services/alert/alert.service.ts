import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})



export class AlertService {


  constructor(private toastr: ToastrService) {

  }



  public toaster(type: "success" | 'warning' | 'info' | 'error', msg: string): void {
    switch (type) {
      case 'success':
        this.toastr.success(msg, "", {
          timeOut: 2000,
          closeButton: true,
          positionClass: "toast-top-center",

        });
        break;
      case 'info':
        this.toastr.info(msg, "", {
          timeOut: 2000,
          closeButton: true,
          positionClass: "toast-top-center",

        });
        break;
      case 'warning':
        this.toastr.warning(msg, "", {
          timeOut: 2000,
          closeButton: true,
          positionClass: "toast-top-center",
        });
        break;
      case 'error':
        this.toastr.error(msg, "", {
          timeOut: 2000,
          closeButton: true,
          positionClass: "toast-top-center",

        });
        break;
      default:
        break;

    }
  }
}


