// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  toastDurationInSeconds: 3,
  corsAnywherePrefix: 'https://cors-anywhere.herokuapp.com/',
  personal: {
    email: 'vighnesh.raut13@gmail.com',
    resumeUrl: 'https://drive.google.com/open?id=1u_8oDHemUAYZdO99AGEYX8iqRrl3lNGO',
    linkedIn: 'https://www.linkedin.com/in/vighnesh153',
    github: {
      currentRepoInfoUrl: '',
      profile: 'https://github.com/vighnesh153'
    },
    pastExperienceFetch: 'https://firebasestorage.googleapis.com/v0/b/vighnesh153-canvas.appspot.com/o/CMS%2FExperience.json?alt=media&to' +
      'ken=e2fe0e01-1bd5-44e1-a285-13a93995b85e',
    projects: [
      {
        title: 'Fractals',
        description: 'Fractals are shapes that have fractional dimensions',
        link: 'https://vighnesh153-canvas.github.io/fractals'
      },
      {
        title: 'Simulations',
        description: 'Simulations are approximate imitations of systems or processes',
        link: 'https://vighnesh153-canvas.github.io/simulations'
      }
    ]
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
