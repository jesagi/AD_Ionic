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
    let objeto = {
      id: 4,
      nombre: "string",
      descripcion: "string",
      precio: 3,
      tipo: "string",
    }
    
    let ref = this._articuloService.getArticulos();
    console.log(objeto);
    this.articulos.push(objeto);

/*
    ref.on("value", snapshot =>{
      snapshot.forEach(child => {
        let value = child.val();
        console.log(child.val());
        this.articulos.push(value);
      })
    })*/
  }
  

}
