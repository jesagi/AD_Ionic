import { Injectable } from "@angular/core";
import { IArticulo, IInmobiliaria, IMotor, ITecnologia } from "../interfaces";

@Injectable()

export class ArticuloService{

    articulos: (IArticulo | ITecnologia | IInmobiliaria | IMotor)[] = [
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
          "vehiculo": "Coche",
          "km": 200,
          "anyo": 2020
        }
      ]

    getArticulos(): (IArticulo | ITecnologia | IInmobiliaria | IMotor)[]{
        return this.articulos;
    }
    getArticulo(id : number) : (IArticulo | ITecnologia | IInmobiliaria | IMotor){
        return this.articulos.find(x => x.id == id);
    }

}