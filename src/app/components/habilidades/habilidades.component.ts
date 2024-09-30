import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardSkillComponent } from '../card-skill/card-skill.component';

interface SkillCategory {
    title: string;
    skills: string[];
    skillIcon: string;
    skillIconPath: string;
}

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [ CardSkillComponent, MatGridListModule, NgFor ],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.scss'
})
export class HabilidadesComponent {
    skillCategories: SkillCategory[] = [
        {
          title: 'Frontend',
          skills: ['Angular', 'Vue 3', 'JavaScript', 'HTML/CSS/SASS', 'TypeScript', 'Bootstrap', 'Angular Material', 'RxJS'],
          skillIcon: 'frontend-icon',
          skillIconPath: 'icons/frontend-icon.svg'
        },
        {
          title: 'Backend',
          skills: ['PHP/Laravel', 'Node.js', 'Python/Django', 'Java/Spring', 'MySQL', 'MongoDB', 'RESTful APIs', 'Postman'],
          skillIcon: 'backend-icon',
          skillIconPath: 'icons/backend-icon.svg'
        },
        {
          title: 'BigData & AI',
          skills: ['Apache Hive', 'HDFS', 'Spark', 'Kafka', 'AWS', 'Databricks', 'Machine Learning', 'Hugging Face'],
          skillIcon: 'dataScience-icon',
          skillIconPath: 'icons/data-science-icon.svg'
        },
        {
          title: 'Otros',
          skills: ['Git', 'Docker', 'Testing Unitario', 'PowerBI', 'Figma', 'WordPress/Woocommerce', 'CI/CD', 'Linux/Bash'],
          skillIcon: 'otherSkills-icon',
          skillIconPath: 'icons/other-skills-icon.svg'
        }
    ];
}
