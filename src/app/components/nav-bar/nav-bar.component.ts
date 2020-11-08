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

import { GoogleAnalyticsService } from '@vighnesh153-shared/services/google-analytics.service';

interface NavBarLinks {
  routerLink: string;
  title: string;
}

interface NavBarInfo {
  displayNavBar: boolean;
  top: string;
  resumeUrl: string;
  blogUrl: string;
  links: NavBarLinks[];
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  navBarInfo: NavBarInfo = {
    displayNavBar: true,
    top: '0px',
    resumeUrl: environment.personal.resumeUrl,
    blogUrl: environment.personal.blogUrl,
    links: [
      {
        title: 'Experience',
        routerLink: '/experience'
      },
      {
        title: 'Projects',
        routerLink: '/projects'
      },
      {
        title: 'Connect',
        routerLink: '/connect'
      },
    ]
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

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {
  }

  onClickHamburger(): void {
    this.hamburgerItemsInfo.isHidden = !this.hamburgerItemsInfo.isHidden;
  }

  // Needed for smaller devices
  closeHamburgerMenu() {
    this.hamburgerItemsInfo.isHidden = true;
  }

  viewedResume() {
    this.googleAnalyticsService
      .eventEmitter(
        'viewed_resume',
        'resume',
        'view',
        1
      );
  }

  viewedBlog() {
    this.googleAnalyticsService
      .eventEmitter(
        'viewed_blog',
        'blog',
        'view',
        1
      );
  }
}
