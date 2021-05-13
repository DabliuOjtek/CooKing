import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  service_opened = false;

  private side_nav_behavior = new BehaviorSubject<boolean>(false)
  currentState = this.side_nav_behavior.asObservable();
  constructor() {}

  changeState(state: boolean){

    if(this.service_opened != state) {
      this.service_opened = state
    }
    else{
      this.service_opened = false;
      state = false;
    }

    this.side_nav_behavior.next(state)
  }
  
}
