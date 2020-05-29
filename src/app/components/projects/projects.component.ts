import {Component, OnInit} from '@angular/core';

import {environment} from '@vighnesh153-environments/environment';
import {Project} from '@vighnesh153-shared/models/Project';
import {GoogleAnalyticsService} from '@vighnesh153-shared/services/google-analytics.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  isLoading = true;
  resultFound = false;

  constructor(private http: HttpClient,
              private googleAnalyticsService: GoogleAnalyticsService) {
  }

  ngOnInit(): void {
    this.http.get(environment.personal.projectsFetch)
      .subscribe({
        next: (response: { content: Project[] }) => {
          this.projects = response.content;

          // Only choose those projects that are either absolute paths
          // or have # of items > 0.
          this.projects = this.projects
            .filter(p => p.isLinkAbsolute || p.items.length > 0);

          this.resultFound = true;
        },
        complete: () => {
          this.isLoading = false;
        }
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
