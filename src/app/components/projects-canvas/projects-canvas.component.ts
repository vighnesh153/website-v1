import {
  Component,
  OnInit
} from '@angular/core';
import { GoogleAnalyticsService } from '@vighnesh153-shared/services/google-analytics.service';
import { HttpClient } from '@angular/common/http';

import { ProjectItem } from '@vighnesh153-shared/models/ProjectItem';
import { environment } from '@vighnesh153-environments/environment';
import { Project } from '@vighnesh153-shared/models/Project';

@Component({
  selector: 'app-projects-canvas',
  templateUrl: './projects-canvas.component.html',
  styleUrls: [
    '../projects/projects.component.scss',
    './projects-canvas.component.scss'
  ]
})
export class ProjectsCanvasComponent implements OnInit {
  projectsList: ProjectItem[] = [];
  isLoading = true;
  resultFound = false;

  constructor(private http: HttpClient,
              private googleAnalyticsService: GoogleAnalyticsService) {
  }

  ngOnInit(): void {
    this.http.get(environment.personal.projectsFetch)
      .subscribe({
        next: (response: { content: Project[] }) => {
          const projects = response.content
            .find(p => p.clientId === 'canvas');
          this.projectsList = projects.items;
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
