import { ErrorComponent } from './components/error/error.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

// Componentes
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PaginaComponent } from "./components/pagina/pagina.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";

// Rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'pagina', component: PaginaComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);