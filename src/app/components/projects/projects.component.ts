import { Component } from '@angular/core';
import { CardProjectComponent } from "../card-project/card-project.component";
import { NgFor } from '@angular/common';

interface Project {
    imagePath: string;
    title: string;
    description: string;
    url: string;
    technologies: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [  NgFor, CardProjectComponent ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    projects: Project[] = [
        {
            imagePath: 'projects/titanic-project.jpg',
            title: 'Titanic Survival Prediction',
            description: 'Un proyecto de análisis de datos que utiliza Machine Learning para predecir la probabilidad de supervivencia de los pasajeros del Titanic.',
            url: 'https://github.com/fernandomacia/Titanic_Predict',
            technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Flask', 'Pickle', 'Docker', 'HTML/CSS', 'Gunicorn']
        },
        {
            imagePath: 'projects/lara-project.jpg',
            title: 'Proyecto LARA',
            description: 'He participado en este proyecto de innovación educativa dirigido a mejorar la autonomía comunicativa de personas con dificultades en el habla a través de tecnologías basadas en inteligencia artificial y aprendizaje automático. ',
            url: 'https://piafplara.es/',
            technologies: ['Mongo DB', 'Amazon S3', 'Python', 'Pandas', 'PyTorch', 'Flask', 'Hugging Face', 'HTML/CSS' ]
        },
        {
            imagePath: 'projects/galaxy-weather-project.jpg',
            title: 'Galaxy Weather',
            description: ' Aplicación de pronóstico del clima que permite consultar el estado del tiempo actual y el pronóstico para cualquier ciudad. Utiliza la API de OpenWeatherMap para obtener los datos meteorológicos en tiempo real.',
            url: 'https://github.com/fernandomacia/GalaxyWeather',
            technologies: ['Vue', 'HTML/CSS', 'OpenWeatherMap API']
        },
        {
            imagePath: 'projects/corel-resizer.jpg',
            title: 'Corel Resizer',
            description: 'Macro que automatiza el redimensionado de múltiples objetos en Corel Draw, optimizando el tiempo y evitando errores en diseños complejos.',
            url: 'https://github.com/fernandomacia/CorelResizer',
            technologies: ['Visual Basic', 'Corel Draw']
        }
    ];
}
