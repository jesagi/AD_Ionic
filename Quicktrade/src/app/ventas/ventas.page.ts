import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../services/articulo.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {

  articulos = [];



  constructor(private _articuloService: ArticuloService) {

  }

  ngOnInit() {
    let ref = this._articuloService.getVentas();
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val()
        console.log(value);
        this.articulos.push(value);
      })
    })
  }
}
