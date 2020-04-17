import { common } from '@vighnesh153-environments/common';

export const environment = {
  production: true,
  toastDurationInSeconds: common.toastDurationInSeconds,
  corsAnywherePrefix: common.corsAnywherePrefix,
  personal: {
    email: common.personal.email,
    resumeUrl: common.personal.resumeUrl,
    linkedIn: common.personal.linkedIn,
    github: {
      currentRepoInfoUrl: 'https://api.github.com/repos/vighnesh153-canvas/angular-client/branches/master',
      profile: common.personal.github.profile
    },
    pastExperienceFetch: 'https://firebasestorage.googleapis.com/v0/b/vighnesh153-canvas.appspot.com/o/CMS%2FExperience.json?alt=media&to' +
      'ken=e2fe0e01-1bd5-44e1-a285-13a93995b85e',
    projects: common.personal.projects
  }
};
