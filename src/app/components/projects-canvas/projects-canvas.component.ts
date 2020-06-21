import {
  Component,
  OnInit
} from '@angular/core';
import { GoogleAnalyticsService } from '@vighnesh153-shared/services/google-analytics.service';

import { ProjectItem } from '@vighnesh153-shared/models/ProjectItem';
import { CmsFetchService } from "@vighnesh153-shared/services/cms-fetch.service";

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

  constructor(private cmsFetch: CmsFetchService,
              private googleAnalyticsService: GoogleAnalyticsService) {
  }

  ngOnInit(): void {
    this.cmsFetch.projects()
      .then(projects => {
          const canvasProjects = projects.find(p => p.clientId === 'canvas');
          this.projectsList = canvasProjects.items;
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
