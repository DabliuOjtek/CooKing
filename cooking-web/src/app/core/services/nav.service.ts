import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private navBehaviorLogged = new BehaviorSubject<boolean>(false);
  navIsLogged = this.navBehaviorLogged.asObservable();

  constructor() { }

  setLogged(isLogged: boolean) {
    this.navBehaviorLogged.next(isLogged);
  }
}
