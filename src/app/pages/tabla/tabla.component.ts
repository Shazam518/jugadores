import { Component, OnInit } from '@angular/core';
import {Player} from '../../interfaces/player';
import {CrudAppService} from '../../services/crud-app.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  jugadores: Player[] = [];
  jugador: Player;

  displayedColumns: string[] = ['nombre', 'apellido', 'pais', 'equipo', 'posicion', 'pie', 'tools'];
  dataSource = this.jugadores;

  constructor( private crudapp : CrudAppService ) { }

  ngOnInit() {
    this.crudapp.obtenerJugador().subscribe( resp =>{
      console.log(resp);
      this.jugadores = resp;
      return this.jugadores;
    });
  }




}
