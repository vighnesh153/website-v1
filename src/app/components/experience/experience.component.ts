import {
  Component,
  OnInit
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { environment } from '@vighnesh153-environments/environment';

import { WorkExperience } from '@vighnesh153-shared/models/Work/WorkExperience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  workExperience: WorkExperience = { jobs: [] };

  constructor(private http: HttpClient) {
    this.fetchWorkExperience();
  }

  fetchWorkExperience() {
    if (environment.production) {
      const fetchUrl = environment.corsAnywherePrefix +
        environment.personal.pastExperienceFetch;

      this.http.get(fetchUrl)
        .pipe(take(1))
        .subscribe((data: WorkExperience) => {
          this.workExperience = data;
        });

    } else {
      import('./development-experience').then(module => {
        this.workExperience = module.developmentWorkExperience;
      });
    }
  }

  ngOnInit(): void {
  }

}
