import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { InicioComponent } from './components/inicio/inicio.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'proyectos', component: ProjectsComponent},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }

];
