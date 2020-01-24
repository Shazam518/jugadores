import { NgModule } from '@angular/core';
import {JugadorComponent} from '../app/pages/jugador/jugador.component';
import {RouterModule, Routes} from '@angular/router';
import {TablaComponent} from './pages/tabla/tabla.component';

const routes: Routes = [
  {path: 'Tabla', component: TablaComponent},
  {path: 'Jugadores/:key', component: JugadorComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'Tabla'}
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
