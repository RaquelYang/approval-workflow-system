import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders } from '@angular/core';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL', {
    providedIn: 'root',
    factory: (): string => 'http://localhost:3000',
});

export function provideApiBaseUrl(apiBaseUrl: string): EnvironmentProviders {
    return makeEnvironmentProviders([
        {
            provide: API_BASE_URL,
            useValue: apiBaseUrl.replace(/\/+$/, ''),
        },
    ]);
}
