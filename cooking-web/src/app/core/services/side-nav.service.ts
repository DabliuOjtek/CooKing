import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideNavService {

  private sideNavBehaviorState = new BehaviorSubject<boolean>(false);
  sideNavState = this.sideNavBehaviorState.asObservable();

  constructor() {
  }

  showHide(state: boolean) {
    this.sideNavBehaviorState.next(state);
  }
}
