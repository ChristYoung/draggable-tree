import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { setupWorker } from 'msw';
import { handlers } from './app/mock/index';

// Trying to use msw for data mocks.
// https://mswjs.io/docs/cli/init.
if (environment.usingMock) {
  setupWorker(...handlers).start();
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
