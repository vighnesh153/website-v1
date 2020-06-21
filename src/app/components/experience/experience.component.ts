import {
  Component,
  OnInit
} from '@angular/core';

import { environment } from '@vighnesh153-environments/environment';

import { WorkExperience } from '@vighnesh153-shared/models/Work/WorkExperience';
import { GoogleAnalyticsService } from '@vighnesh153-shared/services/google-analytics.service';
import { CmsFetchService } from "@vighnesh153-shared/services/cms-fetch.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  workExperience: WorkExperience = { jobs: [] };
  isLoading = true;
  resultFound = false;

  constructor(private cmsFetch: CmsFetchService,
              private googleAnalyticsService: GoogleAnalyticsService) {
    this.fetchWorkExperience();
    this.googleAnalyticsService
      .eventEmitter(
        'visit_experience',
        'experience_tab',
        'visit',
        1
      );
  }

  fetchWorkExperience() {
    if (environment.production) {
      this.cmsFetch.experience()
        .then(experience => {
          this.workExperience = { jobs: experience };
          this.resultFound = true;
          this.isLoading = false;
        })
        .catch(e => {
          this.isLoading = false;
        });
    } else {
      import('./development-experience')
        .then(module => {
          this.workExperience = module.developmentWorkExperience;
          this.resultFound = true;
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }

  ngOnInit(): void {
  }

}
