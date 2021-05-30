import { Component, HostListener, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/core/services/side-nav.service';
import { AuthService } from '../../../core/security/auth.service';
import { AuthLayoutService } from '../../../core/services/auth-layout.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  opened = false;
  isLogged: boolean;
  srcWidth: any;

  constructor(
    private sideNavService: SideNavService,
    private authLayout: AuthLayoutService,
    private authService: AuthService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sideNavService.sideNavState.subscribe((state) => (this.opened = state));
    this.authLayout.isLogged.subscribe((isLogged) => (this.isLogged = isLogged));
  }

  onLogoutUser() {
    this.authService.logout().subscribe();
  }

  onDeleteUser() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Are you sure you want to delete the account?',
      },
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      if (dialogResult) {
        this.authService.deleteUser().subscribe();
        this.router.navigate(['/signup'], { queryParams: { deleteUser: 'true' } });
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.srcWidth = window.innerWidth;
  }

  hideSideBarWithBackdrop() {
    this.sideNavService.showHide(false);
  }
}
