import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


const MaterialComponents = [
  MatButtonModule,
  MatTabsModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatCheckboxModule,
  MatStepperModule,
  MatChipsModule,
  MatDialogModule,
  MatChipsModule,
  MatStepperModule,
  MatSidenavModule,
  MatListModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class CookingModule {}
