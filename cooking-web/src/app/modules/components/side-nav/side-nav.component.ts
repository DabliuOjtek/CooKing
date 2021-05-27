import {Component, HostListener, Input, OnInit} from '@angular/core';
import {SideNavService} from 'src/app/core/services/side-nav.service';
import {AuthService} from "../../../core/security/auth.service";
import {AuthLayoutService} from "../../../core/services/auth-layout.service";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  opened = false;
  isLogged: boolean;
  srcWidth: any;

  constructor(private sideNavService: SideNavService, private authLayout: AuthLayoutService, private authService: AuthService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.sideNavService.sideNavState.subscribe(state => this.opened = state);
    this.authLayout.isLogged.subscribe(isLogged => this.isLogged = isLogged)
    this.isLogged = this.authService.isLogged();
  }

  logoutUser() {
    this.authService.logout().subscribe();
  }

  deleteUser() {
    // this.dialog.open(DeleteUserDialogComponent);
  }

  @HostListener('window:resize', ['$event'])
  getScreenWidth(event?) {
    this.srcWidth = window.innerWidth;
  }
}
