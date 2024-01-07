import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import {
  iconoirArrowLeft,
  iconoirBinMinus,
  iconoirCheckCircle,
  iconoirEdit,
  iconoirFilter,
  iconoirGraphUp,
  iconoirHomeSale,
  iconoirMap,
  iconoirMoneySquare,
  iconoirNavArrowDown,
  iconoirNavArrowUp,
  iconoirPlus,
  iconoirWarningTriangle,
} from '@ng-icons/iconoir';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withViewTransitions(),
      withComponentInputBinding()
    ),
    provideNgIconsConfig({ size: '1.25rem' }),
    provideIcons({
      iconoirFilter,
      iconoirEdit,
      iconoirArrowLeft,
      iconoirMap,
      iconoirHomeSale,
      iconoirMoneySquare,
      iconoirGraphUp,
      iconoirWarningTriangle,
      iconoirCheckCircle,
      iconoirNavArrowUp,
      iconoirNavArrowDown,
      iconoirBinMinus,
      iconoirPlus,
    }),
  ],
};
