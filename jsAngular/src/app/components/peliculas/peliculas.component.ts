import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo:string;

  constructor() {
    this.titulo = 'Titulo inicial - constructor';
    console.log('constructor lanzado');
  }

  ngOnInit(): void {
    console.log('evento on init lanzado');
  }

  ngDoCheck(){
    console.log('evento docheck lanzado');
  }

  ngOnDestroy(){
    console.log('evento on destroy lanzado');
  }

  cambiarTitulo(){
    this.titulo = 'Titulo ha sido cambiado';
  }
}
