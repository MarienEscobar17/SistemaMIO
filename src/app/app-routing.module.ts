import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionReservaComponent } from './gestion-reserva/gestion-reserva.component';
import { CotizarPrecioComponent } from './cotizar-precio/cotizar-precio.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'reserva/:precio/:cantidad/:edad', component: GestionReservaComponent },
  { path: 'home', component: CotizarPrecioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
