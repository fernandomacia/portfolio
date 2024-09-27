import { Component, inject, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

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
    constructor() {
        const matIconRegistry = inject(MatIconRegistry);
        const domSanitizer = inject(DomSanitizer);

        // Register the GitHub icon for use within the component
        matIconRegistry.addSvgIcon(
            'github-mark',
            domSanitizer.bypassSecurityTrustResourceUrl("icons/github-mark.svg"));

        // Register the LinkedIn icon for use within the component
        matIconRegistry.addSvgIcon(
            'linkedin-mark',
            domSanitizer.bypassSecurityTrustResourceUrl("icons/linkedin-mark.svg"));
    };

    toggleSidenav(): void {
        this.sidenav.toggle(); // Use `toggle` method of MatSidenav
    };
};
