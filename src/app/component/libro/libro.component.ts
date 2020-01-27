import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ServicesService } from '../../services/services.service';


@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent{

libro: any = {};

constructor( private activatedRoute:ActivatedRoute,
             private _librosService: ServicesService,
             private router:Router 
) {
  this.activatedRoute.params.subscribe( params => {
    console.log(params['id']);
    this.libro = this._librosService.getLibro(params['id']);
    console.log(this.libro);
  })
}}
