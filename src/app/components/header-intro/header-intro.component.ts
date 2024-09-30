import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-header-intro',
    standalone: true,
    imports: [
        MatButtonModule,
        RouterModule
    ],
    templateUrl: './header-intro.component.html',
    styleUrl: './header-intro.component.scss'
})
export class HeaderIntroComponent {}
