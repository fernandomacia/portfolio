import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeaderIntroComponent } from './components/header-intro/header-intro.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        HeaderComponent,
        HeaderIntroComponent,
        HabilidadesComponent
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'portfolio';
}
