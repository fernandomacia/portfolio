import { Component, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { IconSVGService } from '../../services/icon-svg.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        MatToolbarModule,
        MatTooltipModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        RouterModule,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    @ViewChild('sidenav') sidenav!: MatSidenav;

    /**
     * Constructor for HeaderComponent.
     * Registers SVG icons for GitHub and LinkedIn using MatIconRegistry.
     * @constructor
     */
    constructor(private _iconSVGService: IconSVGService) {};

    ngOnInit(): void {
        const iconsToRegister = [
            { name: 'github-mark', path: 'icons/github-mark.svg' },
            { name: 'linkedin-mark', path: 'icons/linkedin-mark.svg' }
        ];

        this._iconSVGService.registerIcons(iconsToRegister);
    };

    toggleSidenav(): void {
        this.sidenav.toggle(); // Use `toggle` method of MatSidenav
    };
};
