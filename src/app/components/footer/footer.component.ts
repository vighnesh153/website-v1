import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { take } from 'rxjs/operators';

import { environment } from '@vighnesh153-environments/environment';
import { ProjectRepoInfo } from '@vighnesh153-shared/models/ProjectRepoInfo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  lastUpdatedOn: Date;
  repoUrl: string;

  constructor(private http: HttpClient) {
    http.get(environment.github.repoInfoUrl)
      .pipe(take(1))
      .subscribe((data: ProjectRepoInfo) => {
        this.lastUpdatedOn = new Date(data.commit.commit.author.date);
        this.repoUrl = data._links.html;
      });
  }

  ngOnInit(): void {
  }

}
