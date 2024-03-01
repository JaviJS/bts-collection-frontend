import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NzIconModule } from 'ng-zorro-antd/icon';

import {
  CaretRightFill,
  CaretRightOutline,
} from '@ant-design/icons-angular/icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(
      NzIconModule.forRoot([CaretRightFill, CaretRightOutline])
    ),
  ],
};
