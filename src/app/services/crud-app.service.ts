import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Player} from '../interfaces/player';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CrudAppService {
  private  url = 'https://jugadores-76e79.firebaseio.com';

  constructor(private http: HttpClient) { }
  crearJugador(jugador: Player){
    return this.http.post(`${this.url}/Jugador.json`, jugador).pipe(
      map((resp: any) =>{
        jugador.key = resp.name;
        return jugador;
      })
    );
  }
  obtenerJugador(){
    return this.http.get(`${this.url}/Jugador.json`).pipe(
      map(this.crearArreglo)
    );
  }

  private crearArreglo(jugadoresObj: object){
    const jugadores: Player[] = [];
    Object.keys(jugadoresObj).forEach( key => {
      const jugador: Player = jugadoresObj[key];
      jugador.key = key;
      jugadores.push(jugador);
    });
    return jugadores;
  }

}
