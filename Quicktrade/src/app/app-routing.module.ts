import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'articulos/:id',
    loadChildren: () => import('./articulos/articulos.module').then( m => m.ArticulosPageModule)
  },
  {
    path: 'listaarticulos',
    loadChildren: () => import('./listaarticulos/listaarticulos.module').then( m => m.ListaarticulosPageModule)
  },
  {
    path: 'anyadirarticulos',
    loadChildren: () => import('./anyadirarticulos/anyadirarticulos.module').then( m => m.AnyadirarticulosPageModule)
  },  {
    path: 'ventas',
    loadChildren: () => import('./ventas/ventas.module').then( m => m.VentasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
