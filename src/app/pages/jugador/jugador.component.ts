import { Component, OnInit } from '@angular/core';
import {Player, Countries, Team, Posiciones} from '../../interfaces/player';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CrudAppService} from '../../services/crud-app.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  forma: FormGroup;
  jugador: Player = new Player();
  paises = Countries;
  equipos = Team;
  positions = Posiciones;


  constructor(private crudservice: CrudAppService, private route: ActivatedRoute) {
    this.forma = new FormGroup({
      nombre: new FormControl(this.jugador.nombre, [Validators.required, Validators.minLength(2)]),
      apellido: new FormControl(this.jugador.apellido, [Validators.required, Validators.minLength(2)]),
      pais: new FormControl(this.jugador.pais, [Validators.required]),
      equipo: new FormControl(this.jugador.equipo, [Validators.required]),
      posicion: new FormControl(this.jugador.posicion, [Validators.required]),
      pie: new FormControl(this.jugador.pie, [Validators.required]),
    })
  }

  ngOnInit() {

  }

  guardar() {
    this.crudservice.crearJugador(this.forma.value).subscribe(resp => {
      console.log(resp);
    });
  }
}


