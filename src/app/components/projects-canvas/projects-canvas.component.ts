import {
  Component,
  OnInit
} from '@angular/core';
import { GoogleAnalyticsService } from '@vighnesh153-shared/services/google-analytics.service';

import { ProjectItem } from '@vighnesh153-shared/models/ProjectItem';
import { environment } from '@vighnesh153-environments/environment';

@Component({
  selector: 'app-projects-canvas',
  templateUrl: './projects-canvas.component.html',
  styleUrls: [
    '../projects/projects.component.scss',
    './projects-canvas.component.scss'
  ]
})
export class ProjectsCanvasComponent implements OnInit {
  projectsList: ProjectItem[];

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {
    const project = environment.personal.projects.find(p => p.id === 'canvas');
    this.projectsList = project.items;
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
