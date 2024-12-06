import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

declare global {
    interface Window {
        dataLayer: any[];
    }
}

if (environment.production && environment.googleAnalyticsKey) {
const script = document.createElement('script');
script.src = `https://www.googletagmanager.com/gtag/js?id=${environment.googleAnalyticsKey}`;
script.async = true;
document.head.appendChild(script);


window.dataLayer = window.dataLayer || [];
function gtag(...args: any) {
    (window.dataLayer).push(args);
}
gtag('js', new Date());
gtag('config', environment.googleAnalyticsKey);
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
