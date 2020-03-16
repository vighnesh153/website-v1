import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare let gtag: (...args) => void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Vighnesh Raut | My personal playground';
  containerWidth = 90;

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-B8249LVMFV', {
          page_path: event.urlAfterRedirects
        });
      }
    });
  }
}
