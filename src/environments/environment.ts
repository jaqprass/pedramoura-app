// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const firebaseConfig = {
  apiKey: 'AIzaSyAgDP3sJ7L3f4KNLNdj1gi-i-EBISZd8FA',
  authDomain: 'pedra-moura-app.firebaseapp.com',
  databaseURL: 'https://pedra-moura-app-default-rtdb.firebaseio.com',
  projectId: 'pedra-moura-app',
  storageBucket: 'pedra-moura-app.appspot.com',
  messagingSenderId: '201769402124',
  appId: '1:201769402124:web:c902e7ed37a26a88345329',
  measurementId: 'G-78HPPQ99HQ',
};

export const environment = {
  production: false,
  firebase: firebaseConfig,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
