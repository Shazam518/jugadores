import { Component, OnInit } from '@angular/core';
import {Player, Countries, Team} from '../../interfaces/player';
import {FormGroup, FormControl, Validators} from '@angular/forms';

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

  constructor() {
    this.forma = new FormGroup({
      nombre: new FormControl(this.jugador.nombre, [Validators.required, Validators.minLength(2)]),
      apellido: new FormControl(this.jugador.apellido, [Validators.required, Validators.minLength(2)]),
      pais: new FormControl(this.jugador.pais,[Validators.required]),
      equipo: new FormControl(this.jugador.equipo,[Validators.required])
    })
  }

  ngOnInit() {
  }
  guardar(){
    console.log(this.forma);
    console.log(this.jugador);
    console.log(this.forma.value);
  }

}
