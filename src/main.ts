import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app/app-routing.module';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    provideHttpClient(),
  ],
}).catch((err) => console.error(err));
