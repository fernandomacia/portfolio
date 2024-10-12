import { Component } from '@angular/core';
import { HeaderIntroComponent } from "../header-intro/header-intro.component";
import { HabilidadesComponent } from "../habilidades/habilidades.component";
import { ProjectsComponent } from "../projects/projects.component";
import { CertificacionesComponent } from "../certificaciones/certificaciones.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    HeaderIntroComponent,
    HabilidadesComponent,
    ProjectsComponent,
    CertificacionesComponent ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
