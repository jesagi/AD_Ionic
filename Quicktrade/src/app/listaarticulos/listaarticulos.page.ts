import { Component, OnInit } from '@angular/core';
import { IArticulo, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import { ArticuloService } from '../services/articulo.service';

@Component({
  selector: 'app-listaarticulos',
  templateUrl: './listaarticulos.page.html',
  styleUrls: ['./listaarticulos.page.scss'],
})
export class ListaarticulosPage implements OnInit {

  articulos : (IArticulo | ITecnologia | IInmobiliaria | IMotor)[];

  constructor(private _articuloService : ArticuloService) {

  }

  ngOnInit() {
    this.articulos = this._articuloService.getArticulos();
  }

}
