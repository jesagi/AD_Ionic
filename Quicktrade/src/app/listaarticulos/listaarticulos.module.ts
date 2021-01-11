import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaarticulosPageRoutingModule } from './listaarticulos-routing.module';

import { ListaarticulosPage } from './listaarticulos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaarticulosPageRoutingModule
  ],
  declarations: [ListaarticulosPage]
})
export class ListaarticulosPageModule {}
