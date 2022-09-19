import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import {
  bootstrapApplication,
} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app/routing';
import { provideAnimations } from '@angular/platform-browser/animations';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [

    provideAnimations(),
    importProvidersFrom(
      RouterModule.forRoot(ROUTES)),
  ],
}).catch((err) => console.error(err));
