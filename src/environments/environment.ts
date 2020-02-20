// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  themeData: {
    currentTheme: 'vividAndSharp',
    themes: {
      vividAndSharp: {
        color1: '#D93F87',
        color2: '#2A1C3B',
        color3: '#44318D',
        color4: '#8265A7',
        color5: '#A4B3B6',
        majorTextColor: '#FEFDFB',
        shades: {
          color2: {
            toDark: [
              '#291c3a',
              '#271a37',
              '#221730',
              '#1b1226',
              '#110b18'
            ]
          }
        }
      },
      TEMPLATE: {
        color1: '',
        color2: '',
        color3: '',
        color4: '',
        color5: '',
        majorTextColor: '',
        shades: {
          color2: {
            toDark: []
          }
        }
      }
    }
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
