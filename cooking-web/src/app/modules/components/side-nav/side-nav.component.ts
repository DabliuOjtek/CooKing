import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/core/services/side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  opened = false;

  constructor(private sideNavService: SideNavService) {}

  ngOnInit(): void {
    this.sideNavService.currentState.subscribe((state) => (this.opened = state));
  }
}
