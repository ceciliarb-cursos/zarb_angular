import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  produtos: any = [];
  carrinho: any = [];

  @Output() eventClicked = new EventEmitter<any>();

  constructor(public prodServ: ProdutosService, public carrinhoServ: CarrinhoService) {
  }

  addProduto(produto) {
    let i = this.carrinho.findIndex((obj) => obj.produto.id == produto.id);
    if (i >= 0) {
      let qtd = this.carrinho[i].qtd + 1;
      this.carrinho[i] = { produto, qtd };
    } else {
      let qtd = 1;
      this.carrinho.push({ produto, qtd });
    }
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
    this.carrinhoServ.setCarrinho(this.carrinho);
    this.eventClicked.emit({ event: 'adicionou', data: this.carrinho });
  }

  ngOnInit() {
    this.prodServ.getProdutos().subscribe(data => {
      this.produtos = data;
    });
    this.carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    this.carrinhoServ.setCarrinho(this.carrinho);
  }

}
