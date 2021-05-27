import {Component, HostListener, Input, OnInit} from '@angular/core';
import {SideNavService} from 'src/app/core/services/side-nav.service';
import {AuthService} from "../../../core/security/auth.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  opened = false;
  isLogged = false;
  srcWidth: any;

  constructor(private sideNavService: SideNavService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.sideNavService.sideNavState.subscribe(state => this.opened = state);
    this.sideNavService.sideNavIsLogged.subscribe(isLogged => this.isLogged = isLogged);
  }

  logoutUser() {
    this.authService.logout().subscribe();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.srcWidth = window.innerWidth;
  }
}
