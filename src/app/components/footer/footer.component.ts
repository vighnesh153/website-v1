import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { take } from 'rxjs/operators';

import { environment } from '@vighnesh153-environments/environment';
import { ProjectRepoInfo } from '@vighnesh153-shared/models/ProjectRepoInfo';

import { GoogleAnalyticsService } from '@vighnesh153-shared/services/google-analytics.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  lastUpdatedOn: Date;
  repoUrl: string;

  constructor(private http: HttpClient,
              private googleAnalyticsService: GoogleAnalyticsService) {
    this.getProjectRepoInfo();
  }

  getProjectRepoInfo() {
    if (environment.production) {
      this.http.get(environment.personal.github.currentRepoInfoUrl)
        .pipe(take(1))
        .subscribe((data: ProjectRepoInfo) => {
          this.lastUpdatedOn = new Date(data.commit.commit.author.date);
          this.repoUrl = data._links.html;
        });
    }
  }

  visitRepo() {
    this.googleAnalyticsService
      .eventEmitter(
        'visit_angular_client_repo',
        'angular_client_repo',
        'visit',
        1
      );
  }

  ngOnInit(): void {
  }

}
