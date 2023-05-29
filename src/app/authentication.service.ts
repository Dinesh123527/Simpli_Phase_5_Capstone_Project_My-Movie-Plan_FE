import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public userRole = new BehaviorSubject<any>(null);

  constructor() {}

  getType() {
    return this.userRole.asObservable();
  }
  setType(val: any) {
    return this.userRole.next(val);
  }
}
