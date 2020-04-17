import {Component, OnInit} from '@angular/core';

import {environment} from '@vighnesh153-environments/environment';
import {Project} from '@vighnesh153-shared/models/Project';
import {GoogleAnalyticsService} from '@vighnesh153-shared/services/google-analytics.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {
    // Only choose those projects that are either absolute paths
    // or have # of items > 0.
    this.projects = environment.personal.projects
      .filter(p => p.isLinkAbsolute || p.items.length > 0);
  }

  ngOnInit(): void {
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
