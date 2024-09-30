import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IconSVGService } from '../../services/icon-svg.service';

@Component({
  selector: 'app-cardSkills',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    NgFor
  ],
  templateUrl: './cardSkills.component.html',
  styleUrl: './cardSkills.component.scss'
})
export class CardSkillsComponent implements OnInit{
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
