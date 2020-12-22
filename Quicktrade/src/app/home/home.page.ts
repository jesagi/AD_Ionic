import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tecOculto : boolean = false;
  hogOculto : boolean = false;
  InmOculto : boolean = false;
  motOculto : boolean = false;

  TecnoOculto() : void {
    this.tecOculto = true;
    this.hogOculto = false; 
    this.InmOculto = false;
    this.motOculto = false;
  }
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
  }

  constructor() {}

}
