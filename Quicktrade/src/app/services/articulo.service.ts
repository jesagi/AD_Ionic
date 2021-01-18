import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { IArticulo, IInmobiliaria, IMotor, ITecnologia } from "../interfaces";

@Injectable()

export class ArticuloService{

    /*articulos: (IArticulo | ITecnologia | IInmobiliaria | IMotor)[] = [
        {
          "id": 1,
          "nombre": "Movil",
          "descripcion": "samsung galaxy",
          "precio": 300,
          "tipo": "Tecnologia",
          "estado": "Nuevo"
        },
        {
          "id": 2,
          "nombre": "Moto",
          "descripcion": "Harley",
          "precio": 10000,
          "tipo": "Motor",
          "vehiculo": "Moto ",
          "km": 200,
          "anyo": 2020
        }
      ]

    getArticulos(): (IArticulo | ITecnologia | IInmobiliaria | IMotor)[]{
        return this.articulos;
    }
    getArticulo(id : number) : (IArticulo | ITecnologia | IInmobiliaria | IMotor){
        return this.articulos.find(x => x.id == id);
    }*/

    constructor(private _db: AngularFireDatabase){

    }

    setArticulos(articulo: IArticulo){
      let ref = this._db.database.ref("Articulos");
      ref.push(articulo);
    }

}