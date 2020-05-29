import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@vighnesh153-environments/environment';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) {
    const key = router.url;
    if (environment.redirects.hasOwnProperty(key)) {
      window.location.replace(environment.redirects[key]);
    }
  }

  ngOnInit(): void {
  }

}
