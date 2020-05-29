// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { common } from '@vighnesh153-environments/common';

export const environment = {
  production: false,
  toastDurationInSeconds: common.toastDurationInSeconds,
  corsAnywherePrefix: common.corsAnywherePrefix,
  personal: {
    email: common.personal.email,
    resumeUrl: common.personal.resumeUrl,
    linkedIn: common.personal.linkedIn,
    github: {
      currentRepoInfoUrl: '',
      profile: common.personal.github.profile
    },
    pastExperienceFetch: '',
    projectsFetch: common.personal.projectsFetch
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
