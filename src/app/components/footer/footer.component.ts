import { Component } from '@angular/core';
import { TecnologiasComponent } from "../tecnologias/tecnologias.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TecnologiasComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
