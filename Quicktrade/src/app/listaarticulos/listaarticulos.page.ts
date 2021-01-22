import { Component, OnInit } from '@angular/core';
import { IArticulo, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import { ArticuloService } from '../services/articulo.service';

@Component({
  selector: 'app-listaarticulos',
  templateUrl: './listaarticulos.page.html',
  styleUrls: ['./listaarticulos.page.scss'],
})
export class ListaarticulosPage implements OnInit {

  articulos = [];

  

  constructor(private _articuloService : ArticuloService) {

  }

  ngOnInit() {
    let ref= this._articuloService.getArticulos();
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val()
        console.log(value);
        this.articulos.push(value);
      })
    })
  }
  

}
