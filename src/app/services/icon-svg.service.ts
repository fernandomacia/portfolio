import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
    providedIn: 'root'
})
export class IconSVGService {

    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer) {}

    public registerIcon(name: string, path: string): void {
        this.matIconRegistry.addSvgIcon(
          name,
          this.domSanitizer.bypassSecurityTrustResourceUrl(path)
        );
    }

    public registerIcons(icons: { name: string; path: string }[]): void {
        icons.forEach(icon => this.registerIcon(icon.name, icon.path));
    }
}
