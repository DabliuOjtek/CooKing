import {Component, OnInit} from '@angular/core';
import {SideNavService} from 'src/app/core/services/side-nav.service';
import {AuthService} from "../../../core/security/auth.service";
import {NavService} from "../../../core/services/nav.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  isLogged: boolean;

  constructor(private sideNavService: SideNavService, private navService: NavService, private authService: AuthService) { }

  showSideNav() {
    this.sideNavService.showHide(true);
  }

  ngOnInit(): void {
    this.navService.navIsLogged.subscribe(isLogged => this.isLogged = isLogged);
    this.isLogged = this.authService.isLogged();
    this.sideNavService.setLogged(this.isLogged);
  }

  logoutUser(): void {
    this.authService.logout().subscribe();
  }
}
