import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IconSVGService } from '../../services/icon-svg.service';

@Component({
<<<<<<< HEAD:src/app/components/card-skill/card-skill.component.ts
  selector: 'app-card-skill',
=======
  selector: 'app-cardSkills',
>>>>>>> 8c15d9b42b209fd47f852c902182d6296f8b1e47:src/app/components/cardSkills/cardSkills.component.ts
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    NgFor
  ],
<<<<<<< HEAD:src/app/components/card-skill/card-skill.component.ts
  templateUrl: './card-skill.component.html',
  styleUrl: './card-skill.component.scss'
})
export class CardSkillComponent implements OnInit{
=======
  templateUrl: './cardSkills.component.html',
  styleUrl: './cardSkills.component.scss'
})
export class CardSkillsComponent implements OnInit{
>>>>>>> 8c15d9b42b209fd47f852c902182d6296f8b1e47:src/app/components/cardSkills/cardSkills.component.ts
    @Input() title: string = '';
    @Input() skills: string[] = [];
    @Input() skillIcon: string = '';
    @Input() skillIconPath: string = '';

    constructor( private _iconSVGService: IconSVGService) {};

    ngOnInit(): void {
        if (this.skillIcon && this.skillIconPath) {
            this._iconSVGService.registerIcon(this.skillIcon, this.skillIconPath);
        }
    }
}
