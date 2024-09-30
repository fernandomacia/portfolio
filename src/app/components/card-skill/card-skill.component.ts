import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IconSVGService } from '../../services/icon-svg.service';

@Component({
  selector: 'app-card-skill',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    NgFor
  ],
  templateUrl: './card-skill.component.html',
  styleUrl: './card-skill.component.scss'
})
export class CardSkillComponent implements OnInit{
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
