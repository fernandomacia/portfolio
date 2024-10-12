import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IconSVGService } from '../../services/icon-svg.service';
import { MatIconModule } from '@angular/material/icon';

interface Tecnologia {
    name: string;
    path: string;
}

@Component({
    selector: 'app-tecnologias',
    standalone: true,
    imports: [
        NgFor,
        MatIconModule
    ],
    templateUrl: './tecnologias.component.html',
    styleUrl: './tecnologias.component.scss'
})
export class TecnologiasComponent {

    constructor(private _iconSVGService: IconSVGService) {};

    iconsToRegister: Tecnologia[] = [
        { name: 'Python', path: 'technologies/python-logo.svg' },
        { name: 'Java', path: 'technologies/java-logo.svg' },
        { name: 'Javascript', path: 'technologies/javascript-logo.svg' },
        { name: 'Typescript', path: 'technologies/typescript-logo.svg' },
        { name: 'PHP', path: 'technologies/php-logo.svg' },
        { name: 'Angular', path: 'technologies/angular-logo.svg' },
        { name: 'Vue', path: 'technologies/vue-logo.svg' },
        { name: 'Laravel', path: 'technologies/laravel-logo.svg' },
        { name: 'Django', path: 'technologies/django-logo.svg' },
        { name: 'Spring', path: 'technologies/spring-logo.svg' },
        { name: 'NodeJS', path: 'technologies/nodejs-logo.svg' },
        { name: 'Html', path: 'technologies/html-logo.svg' },
        { name: 'Css', path: 'technologies/css-logo.svg' },
        { name: 'Sass', path: 'technologies/sass-logo.svg' },
        { name: 'Bootstrap', path: 'technologies/bootstrap-logo.svg' },
        { name: 'Tailwind', path: 'technologies/tailwind-logo.svg' },
        { name: 'MySQL', path: 'technologies/mysql-logo.svg' },
        { name: 'SQLite', path: 'technologies/sqlite-logo.svg' },
        { name: 'MongoDB', path: 'technologies/mongodb-logo.svg' },
        { name: 'Laragon', path: 'technologies/laragon-logo.svg' },
        { name: 'Xampp', path: 'technologies/xampp-logo.svg' },
        { name: 'Postman', path: 'technologies/postman-logo.svg' },
        { name: 'Pandas', path: 'technologies/pandas-logo.svg' },
        { name: 'Spark', path: 'technologies/apache-spark-logo.svg' },
        { name: 'Kafka', path: 'technologies/kafka-logo.svg' },
        { name: 'AWS', path: 'technologies/aws-logo.svg' },
        { name: 'Databricks', path: 'technologies/databricks-logo.svg' },
        { name: 'Hugging Face', path: 'technologies/huggingface-logo.svg' },
        { name: 'Git', path: 'technologies/git-logo.svg' },
        { name: 'Docker', path: 'technologies/docker-logo.svg' },
        { name: 'Power BI', path: 'technologies/power-bi-logo.svg' },
        { name: 'Figma', path: 'technologies/figma-logo.svg' },
        { name: 'Linux', path: 'technologies/linux-logo.svg' },
        { name: 'VSCode', path: 'technologies/vscode-logo.svg' },
        { name: 'Wordpress', path: 'technologies/wordpress-logo.svg' },
        { name: 'Woocommerce', path: 'technologies/woocommerce-logo.svg' },
        { name: 'Corel Draw', path: 'technologies/corel-logo.svg' },
        { name: 'Photoshop', path: 'technologies/photoshop-logo.svg' },
    ];

    ngOnInit(): void {
        this._iconSVGService.registerIcons(this.iconsToRegister);
    };
}
