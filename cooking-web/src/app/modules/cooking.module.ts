import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule
  ]
})
export class CookingModule { }
