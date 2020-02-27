import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { IconsComponent } from './components/icons/icons.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    HamburgerComponent,
    IconsComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HamburgerComponent,
    IconsComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
