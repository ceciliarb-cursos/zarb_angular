import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  titulo: string = "calculadora";
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  operacao: string = '';

  constructor() { }

  calcular(numero1, operacao, numero2) {
    switch (operacao) {
      case "+":
        this.resultado = Number(numero1) + Number(numero2);
        break;
      case "-":
      this.resultado = numero1 - numero2;
        break;
      case "*":
      this.resultado = numero1 * numero2;
        break;
      case "/":
      this.resultado = numero1 / numero2;
        break;
      default:
        break;
    }
    console.log(`Clicou em calcular: ${numero1} ${operacao} ${numero2} = ${this.resultado}`);
  }

  ngOnInit() {
    console.log('init da calculadora');
  }

}
