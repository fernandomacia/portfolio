import { Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'proyectos', component: ProjectsComponent},
    { path: 'habilidades', component: HabilidadesComponent},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }

];
