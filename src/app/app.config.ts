import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { iconoirEdit, iconoirFilter } from '@ng-icons/iconoir';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withViewTransitions(),
      withComponentInputBinding()
    ),
    provideNgIconsConfig({ size: '1.25rem' }),
    provideIcons({ iconoirFilter, iconoirEdit }),
  ],
};
