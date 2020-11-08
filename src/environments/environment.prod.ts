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
      currentRepoInfoUrl: 'https://api.github.com/repos/vighnesh153/website-v1/branches/master',
      profile: common.personal.github.profile
    }
  },
  redirects: common.redirects,
  ...common.useDirectly
};
