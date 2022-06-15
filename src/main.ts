import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ApplicationModule } from './application/application.module';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ApplicationModule)
  .catch(err => console.error(err));
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));