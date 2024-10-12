import { Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'proyectos', component: ProjectsComponent},
    { path: 'habilidades', component: HabilidadesComponent},
    { path: 'certificaciones', component: CertificacionesComponent },
    { path: 'curriculum', component: CurriculumComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }

];
