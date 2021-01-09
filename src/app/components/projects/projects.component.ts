import { Component, OnInit } from '@angular/core';

import { Project } from '@vighnesh153-shared/models/Project';
import { GoogleAnalyticsService } from '@vighnesh153-shared/services/google-analytics.service';
import { CmsFetchService } from '@vighnesh153-shared/services/cms-fetch.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  isLoading = true;
  resultFound = false;

  constructor(private cmsFetch: CmsFetchService,
              private googleAnalyticsService: GoogleAnalyticsService) {
  }

  ngOnInit(): void {
    this.cmsFetch.projects()
      .then(projects => {
          this.projects = projects;

          // Only choose those projects that are either absolute paths
          // or have # of items > 0.
          this.projects = this.projects
            .filter(p => p.isLinkAbsolute || p.items.length > 0);

          this.resultFound = true;
          this.isLoading = false;
        }
      )
      .catch(e => {
        this.isLoading = false;
      });
  }

  viewProject(title: string) {
    this.googleAnalyticsService
      .eventEmitter(
        'view_' + title,
        'project',
        'view',
        1
      );
  }

}
