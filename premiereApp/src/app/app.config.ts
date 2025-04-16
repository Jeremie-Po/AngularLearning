import {ApplicationConfig, LOCALE_ID, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';

import fr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';

registerLocaleData(fr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },

  ]
};
