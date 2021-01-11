import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnyadirarticulosPageRoutingModule } from './anyadirarticulos-routing.module';

import { AnyadirarticulosPage } from './anyadirarticulos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnyadirarticulosPageRoutingModule
  ],
  declarations: [AnyadirarticulosPage]
})
export class AnyadirarticulosPageModule {}
