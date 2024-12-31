import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

declare global {
    interface Window {
        dataLayer: any[];
    }
}

if (environment.googleAnalyticsKey) {
    // Insertar el comentario y los scripts al principio de <head>
    const headElement = document.head;

    // Crear el comentario fin de script
    const commentEnd = document.createComment('End Google tag (gtag.js)');
    headElement.insertBefore(commentEnd, headElement.firstChild);

    // Crear el script con la configuración de Google Analytics
    const inlineScript = document.createElement('script');
    inlineScript.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${environment.googleAnalyticsKey}');
    `;
    headElement.insertBefore(inlineScript, headElement.firstChild);

    // Crear el script para cargar gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${environment.googleAnalyticsKey}`;
    headElement.insertBefore(script, headElement.firstChild);

    // Crear el comentario
    const comment = document.createComment('Google tag (gtag.js)');
    headElement.insertBefore(comment, headElement.firstChild);
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
