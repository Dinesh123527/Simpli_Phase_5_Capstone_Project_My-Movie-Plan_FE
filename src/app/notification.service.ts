import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  showError(message: string, title: string) {
    this.toastr.error(message, title);
  }

  showSuccess(message: string, title: string) {
    this.toastr.success(message, title);
  }

  showWarn(message: string, title: string) {
    this.toastr.warning(message, title);
  }

  showInfo(message: string, title: string) {
    this.toastr.info(message, title);
  }
}
