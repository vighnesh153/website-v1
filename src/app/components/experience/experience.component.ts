import {
  Component,
  OnInit
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { environment } from '@vighnesh153-environments/environment';

import { WorkExperience } from '@vighnesh153-shared/models/Work/WorkExperience';
import { GoogleAnalyticsService } from '@vighnesh153-shared/services/google-analytics.service';
import { JobDescription } from '@vighnesh153-shared/models/Work/JobDescription';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  workExperience: WorkExperience = { jobs: [] };
  isLoading = true;
  resultFound = false;

  constructor(private http: HttpClient,
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
      const fetchUrl = environment.personal.pastExperienceFetch;

      this.http.get(fetchUrl)
        .pipe(take(1))
        .subscribe({
          next: (data: { content: JobDescription[] }) => {
            this.workExperience = { jobs: data.content };
            this.resultFound = true;
          },
          complete: () => {
            this.isLoading = false;
          }
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
