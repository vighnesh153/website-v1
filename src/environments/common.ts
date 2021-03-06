const blogUrl = 'https://blog.vighnesh153.com/';
const appsUrl = 'https://apps.vighnesh153.com/';

export const common = {
  redirects: {
    '/admin': 'https://vighnesh153-canvas.github.io/admin-portal-client/',
    '/stuff-manager': 'https://vighnesh153.github.io/stuff-manager/',
    '/blog': blogUrl,
    '/apps': appsUrl,
    '/projects': appsUrl,
  },
  personal: {
    email: 'me@vighnesh153.com',
    resumeUrl: 'http://bit.ly/vighnesh153-resume',
    blogUrl,
    appsUrl,
    linkedIn: 'https://www.linkedin.com/in/vighnesh153',
    github: {
      profile: 'https://github.com/vighnesh153'
    }
  },
  useDirectly: {
    corsAnywherePrefix: 'https://cors-anywhere.herokuapp.com/',
    toastDurationInSeconds: 3,
    latestGistCommitIdFetch: 'https://api.github.com/gists/93e4b036228e2c50607c8d689b946327/commits',
    gistDataRoot: 'https://gist.githubusercontent.com/vighnesh153/93e4b036228e2c50607c8d689b946327/raw/'
  }
};
