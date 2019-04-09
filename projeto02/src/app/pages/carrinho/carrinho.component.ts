import { Component, OnInit, Input } from '@angular/core';
import { CarrinhoService } from "../../services/carrinho.service";

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})

export class CarrinhoComponent implements OnInit {
  carrinho: any = [];

  @Input() carrinhoOuter: any;

  constructor(private carrServ: CarrinhoService) { 
    this.carrServ.data.subscribe(info => { this.carrinho = info })
  }

  atualizaQtd(qtd, indice) {
    console.log(qtd, indice);
    if(qtd == 0) {
      this.carrinho.splice(indice, 1);
    } else {
      this.carrinho[indice].produto.qtd = qtd;
    }
    this.carrServ.updateCarrinho(this.carrinho);
  }

  ngOnInit() {
  }

}
