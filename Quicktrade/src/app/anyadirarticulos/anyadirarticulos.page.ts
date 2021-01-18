import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { IArticulo, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import { ArticuloService } from '../services/articulo.service';

@Component({
  selector: 'app-anyadirarticulos',
  templateUrl: './anyadirarticulos.page.html',
  styleUrls: ['./anyadirarticulos.page.scss'],
})
export class AnyadirarticulosPage implements OnInit {

  tecOculto: boolean = true;
  inmOculto: boolean = true;
  motOculto: boolean = true;

  nombre: string;
  descripcion: string;
  precio: number;
  tipo: string;
  estado: string;
  mCuadrados: string;
  nBanyos: number;
  nHabitaciones: number;
  localidad: string;
  vehiculo: string;
  km: number;
  anyo: number;

  productos: (IArticulo | ITecnologia | IInmobiliaria | IMotor)[] = [
    {
      "id": 1,
      "nombre": "movil",
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

  MostrarTecno(): void {
    this.tecOculto = false;
    this.inmOculto = true;
    this.motOculto = true;
    this.tipo = "Tecnologia";
  }
  MostrarHogar(): void {
    this.tecOculto = true;
    this.inmOculto = true;
    this.motOculto = true;
    this.tipo = "Hogar";
  }
  MostrarInmobiliaria(): void {
    this.tecOculto = true;
    this.inmOculto = false;
    this.motOculto = true;
    this.tipo = "Inmobiliaria";
  }
  MostrarMotor(): void {
    this.tecOculto = true;
    this.inmOculto = true;
    this.motOculto = false;
    this.tipo = "Motor";
  }


  constructor(public toastController: ToastController, private _articuloService : ArticuloService) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se ha añadido un nuevo articulo.',
      duration: 2000
    });
    toast.present();
  }

  insertar() {
    if (this.tipo == "Tecnologia") {
      let producto: ITecnologia={
        "id": this.productos.length + 1,
        "nombre": this.nombre,
        "descripcion": this.descripcion,
        "precio": this.precio,
        "tipo": this.tipo,
        "estado": this.estado,
      };
      this._articuloService.setArticulos(producto)
      this.presentToast();
    } else if (this.tipo == "Hogar") {
      let producto: IArticulo={
        "id": this.productos.length + 1,
        "nombre": this.nombre,
        "descripcion": this.descripcion,
        "precio": this.precio,
        "tipo": this.tipo,
      }
      this._articuloService.setArticulos(producto)
      this.presentToast();
    } else if (this.tipo == "Inmobiliaria") {
      let producto: IInmobiliaria={
        "id": this.productos.length + 1,
        "nombre": this.nombre,
        "descripcion": this.descripcion,
        "precio": this.precio,
        "tipo": this.tipo,
        "mCuadrados": this.mCuadrados,
        "nBanyos": this.nBanyos,
        "nHabitaciones": this.nHabitaciones,
        "localidad": this.localidad,
      }
      this._articuloService.setArticulos(producto)
      this.presentToast();
    } else if (this.tipo == "Motor") {
      let producto: IMotor={
        "id": this.productos.length + 1,
        "nombre": this.nombre,
        "descripcion": this.descripcion,
        "precio": this.precio,
        "tipo": this.tipo,
        "vehiculo": this.vehiculo,
        "km": this.km,
        "anyo": this.anyo,
      }
      this._articuloService.setArticulos(producto)
      this.presentToast();
    }
  }

  ngOnInit() {
  }

}
