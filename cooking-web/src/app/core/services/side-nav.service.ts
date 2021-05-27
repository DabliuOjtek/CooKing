import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {NavbarComponent} from "../../modules/components/navbar/navbar.component";

@Injectable({
  providedIn: 'root',
})
export class SideNavService {
  serviceOpened = false;

  private sideNavBehaviorState = new BehaviorSubject<boolean>(false);
  private sideNavBehaviorLogged = new BehaviorSubject<boolean>(false);
  sideNavState = this.sideNavBehaviorState.asObservable();
  sideNavIsLogged = this.sideNavBehaviorLogged.asObservable();

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

  setLogged(isLogged: boolean) {
    this.sideNavBehaviorLogged.next(isLogged);
  }
}
