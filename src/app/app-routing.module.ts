import { NgModule } from '@angular/core';
import {JugadorComponent} from '../app/pages/jugador/jugador.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'Jugadores', component: JugadorComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'Jugadores'}
]




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
