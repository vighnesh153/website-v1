import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { IconsComponent } from './components/icons/icons.component';

@NgModule({
  declarations: [
    HamburgerComponent,
    IconsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HamburgerComponent,
    IconsComponent
  ]
})
export class SharedModule { }
