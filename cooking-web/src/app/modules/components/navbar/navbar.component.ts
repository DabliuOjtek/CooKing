import {Component, OnInit} from '@angular/core';
import {SideNavService} from 'src/app/core/services/side-nav.service';
import {AuthService} from "../../../core/security/auth.service";
import {AuthLayoutService} from "../../../core/services/auth-layout.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  isLogged: boolean;

  constructor(
    private sideNavService: SideNavService,
    private authLayout: AuthLayoutService,
    private authService: AuthService) {
  }

  showSideNav() {
    this.sideNavService.showHide(true);
  }

  ngOnInit(): void {
    this.authLayout.isLogged.subscribe(isLogged => this.isLogged = isLogged);
    this.isLogged = this.authService.isLogged();
  }

  logoutUser(): void {
    this.authService.logout().subscribe();
  }
}
