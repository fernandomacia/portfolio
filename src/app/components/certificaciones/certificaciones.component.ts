import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

interface Certification {
    logo: string;
    name: string;
    url?: string;
}

@Component({
    selector: 'app-certificaciones',
    standalone: true,
    imports: [
        NgFor,
        MatTooltip ],
    templateUrl: './certificaciones.component.html',
    styleUrl: './certificaciones.component.scss'
})
export class CertificacionesComponent {
    certificaciones: Certification[] = [
        {
            logo: 'certifications/daw.png',
            name: 'Desarrollo de Aplicaciones Web',
            url: 'https://ceice.gva.es/es/web/formacion-profesional/publicador-ciclos/-/asset_publisher/FRACVC0hANWa/content/ciclo-formativo-desarrollo-de-aplicaciones-web'
        },
        {
            logo: 'certifications/bigdata-ia.png',
            name: 'Master en Big Data & IA',
            url: 'https://portal.edu.gva.es/03013224/ceiabd/'
        },
        {
            logo: 'certifications/aws-data-engineering.png',
            name: 'AWS Certified Data Engineering',
            url: 'https://www.credly.com/badges/fe837315-c786-4f47-9210-569a8e63c646/public_url'
        },
        {
            logo: 'certifications/aws-cloud-foundations.png',
            name: 'AWS Certified Cloud Foundations',
            url: 'https://www.credly.com/badges/574ab6a8-8ae5-4ac3-9f78-37a5cc7a0f70/public_url'
        },
        {
            logo: 'certifications/coursera-blockchain-basics.png',
            name: 'Coursera Blockchain Basics',
            url: 'https://coursera.org/share/f00558766f5686572ebd25a241d3ca0a'
        },
        {
            logo: 'certifications/coursera-smart-contracts.png',
            name: 'Coursera Smart Contracts',
            url: 'https://coursera.org/share/12870b7db8f003ba428ab505eccaf439'
        },
        {
            logo: 'certifications/coursera-programming-for-everybody.png',
            name: 'Coursera Programming for Everybody',
            url: 'https://coursera.org/share/174993183657dbaeb08d5bdc10da494d'
        }
    ]

}
