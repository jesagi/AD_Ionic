import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticulo, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import { ArticuloService } from '../services/articulo.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.page.html',
  styleUrls: ['./articulos.page.scss'],
})
export class ArticulosPage implements OnInit {

  id : number;
  articulo : IArticulo | ITecnologia | IInmobiliaria | IMotor;

  constructor(private _activatedRoute: ActivatedRoute, private _articuloService : ArticuloService) { }

  ngOnInit() {
    this.id =+ this._activatedRoute.snapshot.paramMap.get('id');
    this.articulo = this._articuloService.getArticulo(this.id);
    console.log("He recibido " + this.articulo.nombre);
  }

}
