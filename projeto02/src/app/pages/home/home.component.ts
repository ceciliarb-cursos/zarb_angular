import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { CarrinhoService } from "../../services/carrinho.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  produtos: any = [];
  carrinho: any = [];

  @Output() eventClicked = new EventEmitter<any>();

  constructor(public prodServ: ProdutosService, private carrServ: CarrinhoService) {
    this.carrServ.data.subscribe(info => { this.carrinho = info })
  }

  addProduto(produto) {
    let i = this.carrinho.findIndex((obj) => obj.produto.id == produto.id);
    if (i >= 0) {
      let qtd = Number(this.carrinho[i].qtd) + 1;
      this.carrinho[i] = { produto, qtd };
    } else {
      let qtd = 1;
      this.carrinho.push({ produto, qtd });
    }
    this.carrServ.updateCarrinho(this.carrinho);
  }

  ngOnInit() {
    this.prodServ.getProdutos().subscribe(data => {
      this.produtos = data;
    });
  }

}
