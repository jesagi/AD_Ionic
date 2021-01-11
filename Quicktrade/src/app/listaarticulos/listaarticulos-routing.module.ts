import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaarticulosPage } from './listaarticulos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaarticulosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaarticulosPageRoutingModule {}
