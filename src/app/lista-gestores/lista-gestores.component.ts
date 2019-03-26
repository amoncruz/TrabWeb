import { Component, OnInit } from '@angular/core';
import { Gestor } from '../gestor';
import { GESTORES } from '../mock-gestores';

@Component({
  selector: 'app-lista-gestores',
  templateUrl: './lista-gestores.component.html',
  styleUrls: ['./lista-gestores.component.css']
})
export class ListaGestoresComponent implements OnInit {

  listaGestores = GESTORES;

  gestorClicado: Gestor;

  constructor() { }

  ngOnInit() {

  }

  onSelect(gestor: Gestor): void {
    this.gestorClicado = gestor;
  }

}
