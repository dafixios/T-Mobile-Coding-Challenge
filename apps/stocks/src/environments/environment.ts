import { StocksAppConfig } from '@coding-challenge/stocks/data-access-app-config';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: StocksAppConfig = {
  production: false,
  apiKey: 'Tpk_2ece2504f6c0412d8dd166fc81c1c88a',
  apiURL: 'https://sandbox.iexapis.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';
