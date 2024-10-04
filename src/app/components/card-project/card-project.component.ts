import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [
    NgFor,
    MatCardModule
],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss'
})
export class CardProjectComponent {
    @Input() imagePath: string = '';
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() url: string = '#';
    @Input() technologies: string[] = [];
}
