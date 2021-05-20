import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideNavService {
  serviceOpened = false;

  private sideNavBehavior = new BehaviorSubject<boolean>(false);
  currentState = this.sideNavBehavior.asObservable();
  constructor() {}

  changeState(state: boolean) {
    if (this.serviceOpened !== state) {
      this.serviceOpened = state;
    } else {
      this.serviceOpened = false;
      state = false;
    }

    this.sideNavBehavior.next(state);
  }
}
