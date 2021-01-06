import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tecOculto : boolean = true;
  inmOculto : boolean = true;
  motOculto : boolean = true;


  nombre : string;
  descripcion : string;
  precio : number;

  productos: any[] = [
    {
      "nombre" : "movil",
      "descripcion" : "samsung galaxy",
      "precio" : 300
    },
    {
      "nombre" : "silla",
      "descripcion" : "tres patas",
      "precio" : 20
    }
  ]

  MostrarTecno() : void {
    this.tecOculto = false;
    this.inmOculto = true;
    this.motOculto = true;
  }
  MostrarHogar() : void {
    this.tecOculto = true;
    this.inmOculto = false;
    this.motOculto = true;
  }
  MostrarMotor() : void {
    this.tecOculto = true;
    this.inmOculto = true;
    this.motOculto = false;
  }
  /*
  HogarOculto() : void {
    this.tecOculto = false;
    this.hogOculto = true; 
    this.InmOculto = false;
    this.motOculto = false;
  }
  InmoOculto() : void {
    this.tecOculto = false;
    this.hogOculto = false; 
    this.InmOculto = true;
    this.motOculto = false; 
  }
  MotorOculto() : void {
    this.tecOculto = false;
    this.hogOculto = false; 
    this.InmOculto = false;
    this.motOculto = true; 
  }*/

  constructor() {}

}
