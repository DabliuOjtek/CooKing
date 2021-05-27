import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthLayoutService {

  private behaviorIsLogged = new BehaviorSubject<boolean>(false);
  isLogged = this.behaviorIsLogged.asObservable();

  constructor() { }

  setLogged(isLogged: boolean) {
    this.behaviorIsLogged.next(isLogged);
  }
}
