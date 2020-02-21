import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HamburgerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HamburgerComponent
  ]
})
export class SharedModule { }
