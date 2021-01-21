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
    let ref= this._articuloService.getArticulos();
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = {
          "id" : child.val().id,
          "nombre" : child.val().nombre,
          "descripcion" : child.val().descripcion,
          "precio" : child.val().precio,
          "tipo" : child.val().tipo,
          "estado" : child.val().estado
        };
        console.log(value);
        this.articulos.push(value);
      })
    })
  }
  

}
