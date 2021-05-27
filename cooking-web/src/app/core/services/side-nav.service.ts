import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideNavService {
  serviceOpened = false;

  private sideNavBehaviorState = new BehaviorSubject<boolean>(false);
  sideNavState = this.sideNavBehaviorState.asObservable();

  constructor() {
  }

  showHide(state: boolean) {
    if (this.serviceOpened !== state) {
      this.serviceOpened = state;
    } else {
      this.serviceOpened = false;
      state = false;
    }
    this.sideNavBehaviorState.next(state);
  }
}
