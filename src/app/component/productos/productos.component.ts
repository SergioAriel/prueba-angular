import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent{

  libros:any[] = [];

  constructor( private _librosService: ServicesService,
               private router:Router ) {

  }

  ngOnInit() {
    this.libros = this._librosService.getLibros();
    //console.log(this.heroes);
  }
  verLibro(idx:number){
    this.router.navigate(['/libro',idx])
  }
}
