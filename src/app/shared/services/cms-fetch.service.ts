import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "@vighnesh153-environments/environment";
import { map, take } from "rxjs/operators";

import { Project } from "@vighnesh153-shared/models/Project";
import { JobDescription } from "@vighnesh153-shared/models/Work/JobDescription";

@Injectable({
  providedIn: 'root'
})
export class CmsFetchService {

  constructor(private http: HttpClient) {
  }

  fetchLatestGistCommitId() {
    const url = environment.latestGistCommitIdFetch;
    return this.http.get(url)
      .pipe(
        map(
          (commits: { version: string }[]) => {
            return commits[0].version;
          }
        ),
        take(1)
      );
  }

  async projects(): Promise<Project[]> {
    const version = await this.fetchLatestGistCommitId().toPromise();
    const projectsUrl = environment.gistDataRoot + version + '/projects.json';
    const projectsContainer: { data: Project[] } =
      await this.http.get<{ data: Project[] }>(projectsUrl).toPromise();
    return projectsContainer.data;
  }

  async experience(): Promise<JobDescription[]> {
    const version = await this.fetchLatestGistCommitId().toPromise();
    const experienceUrl = environment.gistDataRoot + version + '/experience.json';
    const workExperience: { data: JobDescription[] } =
      await this.http.get<{ data: JobDescription[] }>(experienceUrl).toPromise();
    return workExperience.data;
  }
}
