import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';



@NgModule({
  declarations: [
    NavBarComponent,
    HamburgerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class SharedModule { }
