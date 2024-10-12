import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [ MatButtonModule ],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss'
})
export class CurriculumComponent {
    // Método para descargar el PDF
    downloadPdf(): void {
        const link = document.createElement('a');
        link.href = 'cv/CV Fernando Macia 202410.pdf'; // Cambia la ruta según la ubicación de tu archivo PDF
        link.download = 'CV Fernando Macia 202410.pdf';
        link.click();
    }

}
