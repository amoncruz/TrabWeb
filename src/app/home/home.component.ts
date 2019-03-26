import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Texto: string = "Bem vindo á DEVengers";
  constructor() {


  }

  ngOnInit() {
    this.typeWrite(this.Texto);

  }

  typeWrite(texto) {
    texto = texto.split("");
    texto.forEach((value, i) => {
      setTimeout(() => {
        document.querySelector(".texto").innerHTML += value;
      }, 110 * i);

    });
  }
}



