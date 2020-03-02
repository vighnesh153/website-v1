import { Component, OnInit } from '@angular/core';

import { environment } from '@vighnesh153-environments/environment';
import { Project } from '@vighnesh153-shared/models/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor() {
    this.projects = environment.personal.projects;
  }

  ngOnInit(): void {
  }

}
