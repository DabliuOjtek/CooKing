import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { SideNavService } from 'src/app/core/services/side-nav.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  @ViewChildren('sidenav') public Mynav: MatSidenav;

  constructor(private sideNavService: SideNavService) {

  }

  onChangeState(){
    this.sideNavService.changeState(true)
  }
  ngOnInit(): void {
  }
}
