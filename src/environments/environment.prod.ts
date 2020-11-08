import { common } from '@vighnesh153-environments/common';

export const environment = {
  production: true,
  personal: {
    ...common.personal,
    github: {
      ...common.personal.github,
      currentRepoInfoUrl: 'https://api.github.com/repos/vighnesh153/website-v1/branches/master',
    }
  },
  redirects: common.redirects,
  ...common.useDirectly
};
