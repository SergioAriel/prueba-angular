import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private libros:any[]= [
    {
      id:"NARMEC",
      nombre: "La Naranja Mecanica",
      img: "./assets/naranjamec.jpeg",
      anio:"1962",
      autor:"Stanley Kubrick",
      genero: "novela",
      resumen: "La naranja mecánica cuenta la historia del nadsat-adolescente Alex y sus tres drugos-amigos en un mundo de crueldad y destrucción. Alex tiene los principales atributos humanos: amor a la agresión, amor al lenguaje, amor a la belleza. Pero es joven y no ha entendido aún la verdadera importancia de la libertad, la que disfruta de un modo violento. En cierto sentido vive en el edén, y sólo cuando cae (como en verdad le ocurre, desde una ventana) parece capaz de llegar a transformarse en un verdadero ser humano."
    },
    {
      id:"NARMEC",
      nombre: "La Naranja Mecanica",
      img: "./assets/naranjamec.jpeg",
      anio:"1962",
      autor:"Stanley Kubrick",
      genero: "novela",
      resumen: "La naranja mecánica cuenta la historia del nadsat-adolescente Alex y sus tres drugos-amigos en un mundo de crueldad y destrucción. Alex tiene los principales atributos humanos: amor a la agresión, amor al lenguaje, amor a la belleza. Pero es joven y no ha entendido aún la verdadera importancia de la libertad, la que disfruta de un modo violento. En cierto sentido vive en el edén, y sólo cuando cae (como en verdad le ocurre, desde una ventana) parece capaz de llegar a transformarse en un verdadero ser humano."
    },

  ];


  constructor() {  
  }
  getLibros(){
    return this.libros;
  }
  getLibro(idx: number){
    return this.libros[idx];
  }
  }
