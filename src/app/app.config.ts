import { provideHttpClient } from '@angular/common/http';
import { provideBrowserGlobalErrorListeners, type ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { provideApiBaseUrl } from './core/tokens/api-base-url.token';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideHttpClient(),
        provideRouter(routes),
        provideApiBaseUrl(environment.apiBaseUrl),
    ],
};
