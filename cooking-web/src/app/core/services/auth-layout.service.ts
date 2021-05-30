import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthLayoutService {

  private LS_TOKEN = 'JWT_TOKEN';

  private behaviorIsLogged = new BehaviorSubject<boolean>(!!localStorage.getItem(this.LS_TOKEN));
  isLogged = this.behaviorIsLogged.asObservable();

  constructor() { }

  setLogged(isLogged: boolean) {
    this.behaviorIsLogged.next(isLogged);
  }
}
