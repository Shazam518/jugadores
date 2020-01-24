import { Component, OnInit } from '@angular/core';
import {Player} from '../../interfaces/player';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  forma: FormGroup;
  jugador: Player = new Player();

  constructor() {
    this.forma = new FormGroup({
      nombre: new FormControl(this.jugador.nombre, [Validators.required, Validators.minLength(2)]),
      apellido: new FormControl(this.jugador.apellido, [Validators.required, Validators.minLength(2)])
    })
  }

  ngOnInit() {
  }
  guardar(){
    console.log(this.forma);
    console.log(this.jugador);
  }

}
