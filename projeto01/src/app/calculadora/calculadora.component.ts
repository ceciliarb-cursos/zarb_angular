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

  calcular() {
    switch (this.operacao) {
      case "+":
        this.resultado = Number(this.numero1) + Number(this.numero2);
        break;
      case "-":
      this.resultado = this.numero1 - this.numero2;
        break;
      case "*":
      this.resultado = this.numero1 * this.numero2;
        break;
      case "/":
      this.resultado = this.numero1 / this.numero2;
        break;
      default:
        break;
    }
    console.log(`Clicou em calcular: ${this.numero1} ${this.operacao} ${this.numero2} = ${this.resultado}`);
  }

  ngOnInit() {
    console.log('init da calculadora');
  }

}
