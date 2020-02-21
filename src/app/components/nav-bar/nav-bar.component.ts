import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild
} from '@angular/core';

import {environment} from '@vighnesh153-environments/environment';
import {
  onClick
} from './nav-bar.component.util';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  navBarInfo = {
    displayNavBar: true,
    top: '0px',
    resumeUrl: environment.resumeUrl
  };
  hamburgerItemsInfo = {
    isHidden: true
  };

  @Input() containerWidth: number;

  @ViewChild('navBar') currentElement: ElementRef;
  @ViewChild('hamburgerItems') hamburgerItems: ElementRef;

  @HostListener('document:click', ['$event']) clickEvent(event: Event) {
    onClick(event, this);
  }

  constructor() {
  }

  onClickHamburger(): void {
    this.hamburgerItemsInfo.isHidden = !this.hamburgerItemsInfo.isHidden;
  }
}
