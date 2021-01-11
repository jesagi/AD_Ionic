import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnyadirarticulosPage } from './anyadirarticulos.page';

const routes: Routes = [
  {
    path: '',
    component: AnyadirarticulosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnyadirarticulosPageRoutingModule {}
