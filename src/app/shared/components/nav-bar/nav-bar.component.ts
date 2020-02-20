import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { Subscription } from 'rxjs';

import { Theme } from '@vighnesh153-shared/models/Theme';
import { ThemeService } from '@vighnesh153-shared/services/theme.service';

import {
  onClick,
  onScroll
} from '@vighnesh153-shared/components/nav-bar/nav-bar.component.util';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnDestroy {
  navBarInfo = {
    displayNavBar: true,
    top: '0px',
    borderBottomGradient: ''
  };
  hamburgerItemsInfo = {
    isHidden: true
  };

  theme: Theme;
  themeSubscription: Subscription;
  previousScrollValue: number;

  @Input() containerWidth: number;

  @ViewChild('navBar') currentElement: ElementRef;
  @ViewChild('hamburgerItems') hamburgerItems: ElementRef;

  @HostListener('document:click', ['$event']) clickEvent(event: Event) {
    onClick(event, this);
  }

  @HostListener('document:scroll', ['$event']) scrollEvent(event: Event) {
    onScroll(event, this);
  }

  constructor(private themeService: ThemeService) {
    this.themeSubscription = this.themeService.themeSubject.subscribe(
      (theme: Theme) => {
        this.theme = theme;
      }
    );
    this.previousScrollValue = window.pageYOffset;
  }

  onClickHamburger(): void {
    this.hamburgerItemsInfo.isHidden = !this.hamburgerItemsInfo.isHidden;
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
