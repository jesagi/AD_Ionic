import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../services/articulo.service';
import { NumericValueAccessor } from '@ionic/angular';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {

  articulos = [];
  ventas = [];
  id : number;
  nombre: string;

  puntuacion: number;

  constructor(private _articuloService: ArticuloService) {

  }

  ngOnInit() {
    let ref = this._articuloService.getVentas();
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val()
        this.articulos.push(value);
      })
    })
  }
  enviar(id){
    let ref = this._articuloService.getVentas();
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let num = child.val().id;
        if (num==id){
          console.log(id)
          this.id=num;
          this.nombre=child.val().nombre;
        }
      })
    })

    let producto={
      "id": this.id,
      "nombre": this.nombre,
      "puntuacion": this.puntuacion,
    };
    this._articuloService.setVentas(producto)
  }
}
