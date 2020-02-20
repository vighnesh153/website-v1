import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

import { Theme } from '@vighnesh153-shared/models/Theme';
import { environment } from '@vighnesh153-environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeSubject: BehaviorSubject<Theme>;

  constructor() {
    const { currentTheme, themes } = environment.themeData;
    this.themeSubject = new BehaviorSubject<Theme>(
      themes[currentTheme]
    );
  }
}
